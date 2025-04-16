import type { Message } from "./message";
import type { Artifact } from "./artifact";
import type { PushNotificationConfig } from "./notification";

export interface Task {
  id: string;
  sessionId: string;
  status: TaskStatus;
  history?: Message[];
  artifacts?: Artifact[];
  metadata?: Record<string, any>;
}

export interface TaskStatus {
  state: TaskState;
  message?: Message;
  timestamp?: string;
}

export interface TaskStatusUpdateEvent {
  id: string;
  status: TaskStatus;
  final: boolean;
  metadata?: Record<string, any>;
}

export interface TaskArtifactUpdateEvent {
  id: string;
  artifact: Artifact;
  metadata?: Record<string, any>;
}

export interface TaskSendParams {
  id: string;
  sessionId?: string;
  message: Message;
  historyLength?: number;

  pushNotification?: PushNotificationConfig;
  metadata?: Record<string, any>;
}

export type TaskState =
  | "submitted"
  | "working"
  | "input-required"
  | "completed"
  | "canceled"
  | "failed"
  | "unknown";
