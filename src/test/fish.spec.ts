import { Fish } from '../model/fish';
import { FishCollection } from '../model/fishCollection';
describe('fish', () => {
  it('should add', () => {
    const fishCollection = new FishCollection();
    const fish = new Fish("pantyFish", 1234, 1434);
    fishCollection.addFish(fish);
    expect(fishCollection.get(fish)).toBe(fish);
  })

  it('should remove', () => {
    const fishCollection = new FishCollection();
    const fish = new Fish("pantyFish", 1234, 1434);
    fishCollection.addFish(fish);
    fishCollection.remove(fish);

    expect(fishCollection.get(fish)).toBe(undefined);
  });
})