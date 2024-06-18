export interface Node {
  name: string;
  handler: string;
}

export interface Magick {
  scannedNodes: Node[];
}
