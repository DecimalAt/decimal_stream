/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IAttestationVerifier,
  IAttestationVerifierInterface,
} from "../../../../contracts/JobManager/Interfaces.sol/IAttestationVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "isValidSigner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "isVerified",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "attestationData",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IAttestationVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IAttestationVerifierInterface {
    return new Interface(_abi) as IAttestationVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null,
  ): IAttestationVerifier {
    return new Contract(
      address,
      _abi,
      runner,
    ) as unknown as IAttestationVerifier;
  }
}