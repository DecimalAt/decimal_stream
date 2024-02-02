/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface IAttestationVerifierInterface extends Interface {
  getFunction(
    nameOrSignature: "isValidSigner" | "isVerified" | "verify",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isValidSigner",
    values: [AddressLike],
  ): string;
  encodeFunctionData(
    functionFragment: "isVerified",
    values: [AddressLike],
  ): string;
  encodeFunctionData(functionFragment: "verify", values: [BytesLike]): string;

  decodeFunctionResult(
    functionFragment: "isValidSigner",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "isVerified", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
}

export interface IAttestationVerifier extends BaseContract {
  connect(runner?: ContractRunner | null): IAttestationVerifier;
  waitForDeployment(): Promise<this>;

  interface: IAttestationVerifierInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent,
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent,
  ): Promise<this>;

  isValidSigner: TypedContractMethod<[_signer: AddressLike], [boolean], "view">;

  isVerified: TypedContractMethod<[signer: AddressLike], [string], "view">;

  verify: TypedContractMethod<[attestationData: BytesLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: "isValidSigner",
  ): TypedContractMethod<[_signer: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isVerified",
  ): TypedContractMethod<[signer: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "verify",
  ): TypedContractMethod<[attestationData: BytesLike], [boolean], "view">;

  filters: {};
}