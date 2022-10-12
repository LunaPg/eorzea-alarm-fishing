import { Fish } from "./fish";

export class FishCollection {

  private fishColletion: Fish[] = new Array();

  public addFish(fish: Fish) {
    this.fishColletion.push(fish);
  }

  public remove(fish: Fish): void {
    const index = this.fishColletion.findIndex((f) => f.name === fish.name);
    if (index > -1) {
      this.fishColletion.splice(index, 1);
    }
  }

  public get(fish: Fish) {
    return this.fishColletion.find((f) => f.name === fish.name);
  }
}