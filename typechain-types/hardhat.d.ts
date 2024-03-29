/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SafeERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.SafeERC20__factory>;
    getContractFactory(
      name: "Address",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Address__factory>;
    getContractFactory(
      name: "ECDSA",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ECDSA__factory>;
    getContractFactory(
      name: "JobManager",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.JobManager__factory>;
    getContractFactory(
      name: "IAttestationVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IAttestationVerifier__factory>;
    getContractFactory(
      name: "IExtractor",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IExtractor__factory>;
    getContractFactory(
      name: "IValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IValidator__factory>;
    getContractFactory(
      name: "AttestationVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AttestationVerifier__factory>;
    getContractFactory(
      name: "Extractor",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Extractor__factory>;
    getContractFactory(
      name: "Validator",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Validator__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Token__factory>;

    getContractAt(
      name: "IERC1155Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SafeERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.SafeERC20>;
    getContractAt(
      name: "Address",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Address>;
    getContractAt(
      name: "ECDSA",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ECDSA>;
    getContractAt(
      name: "JobManager",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.JobManager>;
    getContractAt(
      name: "IAttestationVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IAttestationVerifier>;
    getContractAt(
      name: "IExtractor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IExtractor>;
    getContractAt(
      name: "IValidator",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.IValidator>;
    getContractAt(
      name: "AttestationVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.AttestationVerifier>;
    getContractAt(
      name: "Extractor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Extractor>;
    getContractAt(
      name: "Validator",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Validator>;
    getContractAt(
      name: "Token",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Token>;

    deployContract(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "SafeERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.SafeERC20>;
    deployContract(
      name: "Address",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Address>;
    deployContract(
      name: "ECDSA",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ECDSA>;
    deployContract(
      name: "JobManager",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.JobManager>;
    deployContract(
      name: "IAttestationVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IAttestationVerifier>;
    deployContract(
      name: "IExtractor",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IExtractor>;
    deployContract(
      name: "IValidator",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IValidator>;
    deployContract(
      name: "AttestationVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.AttestationVerifier>;
    deployContract(
      name: "Extractor",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Extractor>;
    deployContract(
      name: "Validator",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Validator>;
    deployContract(
      name: "Token",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Token>;

    deployContract(
      name: "IERC1155Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "SafeERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.SafeERC20>;
    deployContract(
      name: "Address",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Address>;
    deployContract(
      name: "ECDSA",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ECDSA>;
    deployContract(
      name: "JobManager",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.JobManager>;
    deployContract(
      name: "IAttestationVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IAttestationVerifier>;
    deployContract(
      name: "IExtractor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IExtractor>;
    deployContract(
      name: "IValidator",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.IValidator>;
    deployContract(
      name: "AttestationVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.AttestationVerifier>;
    deployContract(
      name: "Extractor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Extractor>;
    deployContract(
      name: "Validator",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Validator>;
    deployContract(
      name: "Token",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Token>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer,
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<ethers.Contract>;
  }
}
