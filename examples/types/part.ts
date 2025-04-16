export interface TextPart {
  type: "text";
  text: string;
}
export interface FilePart {
  type: "file";
  file: {
    name?: string;
    mimeType?: string;
    bytes?: string;
    uri?: string;
  };
}
export interface DataPart {
  type: "data";
  data: Record<string, any>;
}

export type Part = (TextPart | FilePart | DataPart) & {
  metadata: Record<string, any>;
};
