import type { Part } from "./part";

export interface Message {
  role: "user" | "agent";
  parts: Part[];
  metadata?: Record<string, any>;
}
