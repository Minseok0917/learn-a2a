import type { ErrorMessage } from "./error";
interface JSONRPCResponseSuccessConfig {
  jsonrpc: "2.0";
  id: string;
  result: any;
}

interface JSONRPCResponseErrorConfig {
  jsonrpc: "2.0";
  id: string;
  erorr: ErrorMessage;
}

type JSONRPCResponseConfig =
  | JSONRPCResponseSuccessConfig
  | JSONRPCResponseErrorConfig;
