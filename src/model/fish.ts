import EorzeaTime from "eorzea-time";

export class Fish {
  public name: string;
  public EZTime: EorzeaTime | null;
  public IRLTime: Date | null = null;
  public icon: string;
  public id: number;
  public fishingSpotId: number;

  constructor(name: string, IRLTime: number, id: number, icon: string, fishingSpotId: number) {
    this.name = name;
    this.IRLTime = new Date(IRLTime);
    this.EZTime = this.getEZTime();
    this.icon = icon;
    this.id = id;
    this.fishingSpotId = fishingSpotId;
  }

  private getEZTime(){
    return this.IRLTime == null ?  null : new EorzeaTime(this.IRLTime);
  }

}