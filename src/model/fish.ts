export class Fish {
  private name: string;
  private EZTime: number;
  private IRLTime: number;

  constructor(name: string, EZTime: number, IRLTime: number) {
    this.name = name;
    this.EZTime = EZTime;
    this.IRLTime = IRLTime;
  }

  public getName(): string {
    return this.name;
  }

  public getEZTime(): number {
    return this.EZTime;
  }

  public getIRLTime(): number {
    return this.IRLTime;
  }

  public changeName(name: string): void {
    this.name = name;
  }
  
}