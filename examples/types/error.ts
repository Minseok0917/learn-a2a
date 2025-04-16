export interface ErrorMessage {
  code: number;
  message: string;
  data?: any;
}

/***
 * | Error Code       | Message                          | Description                                            |
 * | ---------------- | -------------------------------- | ------------------------------------------------------ |
 * | -32700           | JSON parse error                 | Invalid JSON was sent                                  |
 * | -32600           | Invalid Request                  | Request payload validation error                       |
 * | -32601           | Method not found                 | Not a valid method                                     |
 * | -32602           | Invalid params                   | Invalid method parameters                              |
 * | -32603           | Internal error                   | Internal JSON-RPC error                                |
 * | -32000 to -32099 | Server error                     | Reserved for implementation specific error codes       |
 * | -32001           | Task not found                   | Task not found with the provided id                    |
 * | -32002           | Task cannot be canceled          | Task cannot be canceled by the remote agent            |
 * | -32003           | Push notifications not supported | Push Notification is not supported by the agent        |
 * | -32004           | Unsupported operation            | Operation is not supported                             |
 * | -32005           | Incompatible content types       | Incompatible content types between client and an agent |
 */
