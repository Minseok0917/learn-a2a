interface JSONRPCRequestConfig {
  jsonrpc: "2.0";
  id: string;
  method: string;
  params?: Object | Array<any>;
}
