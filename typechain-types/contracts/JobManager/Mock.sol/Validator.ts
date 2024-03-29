/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
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

export interface ValidatorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "JOB_MANAGER"
      | "MAX_EXECUTION_INTERVAL"
      | "MIN_EXECUTION_INTERVAL"
      | "MIN_EXECUTION_STARTUP_DELAY"
      | "executionInterval"
      | "nextExecutionBlock"
      | "pricePerExecution"
      | "start"
      | "started"
      | "totalEscrow"
      | "validate",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "JOB_MANAGER",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_EXECUTION_INTERVAL",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_EXECUTION_INTERVAL",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_EXECUTION_STARTUP_DELAY",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "executionInterval",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "nextExecutionBlock",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "pricePerExecution",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "start",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "started", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalEscrow",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [BytesLike, AddressLike],
  ): string;

  decodeFunctionResult(
    functionFragment: "JOB_MANAGER",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_EXECUTION_INTERVAL",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_EXECUTION_INTERVAL",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_EXECUTION_STARTUP_DELAY",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "executionInterval",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextExecutionBlock",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "pricePerExecution",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "started", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalEscrow",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
}

export interface Validator extends BaseContract {
  connect(runner?: ContractRunner | null): Validator;
  waitForDeployment(): Promise<this>;

  interface: ValidatorInterface;

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

  JOB_MANAGER: TypedContractMethod<[], [string], "view">;

  MAX_EXECUTION_INTERVAL: TypedContractMethod<[], [bigint], "view">;

  MIN_EXECUTION_INTERVAL: TypedContractMethod<[], [bigint], "view">;

  MIN_EXECUTION_STARTUP_DELAY: TypedContractMethod<[], [bigint], "view">;

  executionInterval: TypedContractMethod<[], [bigint], "view">;

  nextExecutionBlock: TypedContractMethod<[], [bigint], "view">;

  pricePerExecution: TypedContractMethod<[], [bigint], "view">;

  start: TypedContractMethod<
    [
      _pricePerExecution: BigNumberish,
      _executionInterval: BigNumberish,
      _maxExecution: BigNumberish,
      _executionStartBlock: BigNumberish,
    ],
    [void],
    "nonpayable"
  >;

  started: TypedContractMethod<[], [boolean], "view">;

  totalEscrow: TypedContractMethod<[], [bigint], "view">;

  validate: TypedContractMethod<
    [arg0: BytesLike, recipient: AddressLike],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: "JOB_MANAGER",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MAX_EXECUTION_INTERVAL",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MIN_EXECUTION_INTERVAL",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MIN_EXECUTION_STARTUP_DELAY",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "executionInterval",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nextExecutionBlock",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pricePerExecution",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "start",
  ): TypedContractMethod<
    [
      _pricePerExecution: BigNumberish,
      _executionInterval: BigNumberish,
      _maxExecution: BigNumberish,
      _executionStartBlock: BigNumberish,
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "started",
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "totalEscrow",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "validate",
  ): TypedContractMethod<
    [arg0: BytesLike, recipient: AddressLike],
    [boolean],
    "nonpayable"
  >;

  filters: {};
}
