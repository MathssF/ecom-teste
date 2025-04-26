export class ToBackWorker {
  private data: any;
  private path: string;
  private count: number;
  constructor(d: any, p: string, c: number) {
    this.data = d;
    this.path = p;
    this.count = c;
  }
}