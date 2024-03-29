import express from "express";
import path from "path";
import fs from "fs";
import { TokenFeedManager } from "./TokenFeedManager";
import DataStream, { TokenData } from "./DataStream"; // Make sure the path matches your project structure

import { JobManager__factory } from "./typechain-types";
import { ethers } from "ethers";
import { BigNumber } from "bignumber.js";

const app = express();
const tokenFeedManager = new TokenFeedManager();
const dataStream = new DataStream();

const port = 3000;

const rpcUrl = "https://rpc.ankr.com/gnosis";
// const wsUrl = "wss://rpc.gnosischain.com/wss";

const jobManagerContractAddress = "0x605eB302826b11Ff6307685B36A3198024BCa0A9";

const provider = new ethers.JsonRpcProvider(rpcUrl);
const jobManager = JobManager__factory.connect(
  jobManagerContractAddress,
  provider,
);

// const providerWs = new ethers.WebSocketProvider(wsUrl);
// const jobManagerWs = JobManager__factory.connect(
//   jobManagerContractAddress,
//   providerWs,
// );

// jobManagerWs.on(
//   jobManager.filters.ExecutionComplete,
//   async (jobId, executionId, _, executeEvent) => {
//     console.log({ jobId, executionId });

//     const jobIdNumber = parseInt(jobId.toString());
//     const tokenNameFromId = tokenFeedManager.getTokenNameById(jobIdNumber);
//     if (tokenNameFromId) {
//       const executionData = await jobManager.exeuctionData(jobId, executionId);
//       const blockNumber = (executeEvent as any)?.log?.blockNumber;
//       const transactionHash = (executeEvent as any)?.log?.transactionHash;
//       const priceToDisplay = new BigNumber(executionData).toFixed(0);

//       const data = `BlockNumber: ${blockNumber} , TransactionHash: ${transactionHash} , Exec No: ${executionId}, Price: ${priceToDisplay}`;
//       dataStream.updateData(jobIdNumber, tokenNameFromId, data);
//     }
//   },
// );

// Simulate data updates for each token
// setInterval(() => {
//   for (let [id, tokenName] of tokenFeedManager.getAllTokens()) {
//     const data = `Update for ${tokenName}: ${new Date().toISOString()}`;
//     const tokenNameFromId = tokenFeedManager.getTokenNameById(id);
//     if (tokenNameFromId) {
//       dataStream.updateData(id, tokenNameFromId, data);
//     }
//   }
// }, 2000); // Every 2 seconds

async function blockParser() {
  let currentBlock = await provider.getBlockNumber();

  for (;;) {
    const latestBlock = await provider.getBlockNumber();
    if (currentBlock < latestBlock) {
      const allLogs = await provider.getLogs({
        fromBlock: currentBlock,
        toBlock: currentBlock,
      });
      const jobManangerLogs = allLogs.filter(
        (a) =>
          a.address.toLowerCase() === jobManagerContractAddress.toLowerCase(),
      );
      console.log({
        currentBlock,
        latestBlock,
        jobManangerLogs: jobManangerLogs.length,
      });

      const jobManagerInterface = JobManager__factory.createInterface();
      const executionEvents = jobManangerLogs
        .map((a) => {
          return {
            parsedLog: jobManagerInterface.parseLog(a as any),
            log: a,
          };
        })
        .filter((a) => a.parsedLog && a.parsedLog.name === "ExecutionComplete");

      for (let index = 0; index < executionEvents.length; index++) {
        const executeEvent = executionEvents[index];
        const jobId = new BigNumber(executeEvent.parsedLog?.args[0]).toNumber();
        const executionId = new BigNumber(
          executeEvent.parsedLog?.args[1],
        ).toNumber();
        console.log({ jobId, executionId });

        const tokenNameFromId = tokenFeedManager.getTokenNameById(jobId);
        if (tokenNameFromId) {
          const executionData = await jobManager.exeuctionData(
            jobId,
            executionId,
          );
          const blockNumber = executeEvent.log.blockNumber;
          const transactionHash = executeEvent?.log?.transactionHash;
          const priceToDisplay = new BigNumber(executionData).toFixed(0);

          const data = `BlockNumber: ${blockNumber} , TransactionHash: ${transactionHash} , Exec No: ${executionId}, Price: ${priceToDisplay}`;
          dataStream.updateData(jobId, tokenNameFromId, data);
        }
      }

      currentBlock++;
    } else {
      console.log("waiting for new blocks");
      await induceDelay();
    }
  }
}

async function induceDelay(ms: number = 5000): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

app.get("/feed/:token_name", (req, res) => {
  const tokenName = req.params.token_name;
  const tokenID = tokenFeedManager.getIdByTokenName(tokenName);

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  if (tokenID === undefined) {
    res.write(`data: ${tokenName} not available\n\n`);
    res.end();
    return;
  }

  res.write(
    `data: ${tokenName} is available. Waiting for new feed data .... \n\n`,
  );
  const onDataUpdate = (tokenData: TokenData) => {
    if (tokenData.id === tokenID) {
      res.write(`data: ${tokenData.data} \n\n`);
    }
  };

  dataStream.on("data", onDataUpdate);

  req.on("close", () => {
    dataStream.off("data", () => {
      res.end();
    });
  });

  req.on("end", () => {
    dataStream.off("data", () => {
      res.end();
    });
  });

  req.on("error", () => {
    dataStream.off("data", () => {
      res.end();
    });
  });

  req.on("pause", () => {
    dataStream.off("data", () => {
      res.end();
    });
  });
});

app.get("/:token_name", (req, res) => {
  const tokenName = req.params.token_name;
  const indexPath = path.join(__dirname, "public", "index.html");

  if (fs.existsSync(indexPath)) {
    fs.readFile(indexPath, "utf8", (err, data) => {
      if (err) {
        res.status(500).send("Internal Server Error");
        return;
      }

      // Assuming the placeholder is in a script tag for client-side JavaScript
      const modifiedData = data.replace("/* token_name */", `${tokenName}`);
      res.send(modifiedData);
    });
  } else {
    res.status(404).send("Not found");
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
  blockParser().then(console.log);
});
