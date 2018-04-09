import { Deserializable } from "./deserializable.model";

// https://blog.simontest.net/extend-array-with-typescript-965cc1134b3

export class GameValues extends Array<Array<number>> implements Deserializable<GameValues> {

  constructor(items?: Array<number>) {
    super(items);

    Object.setPrototypeOf(this, Object.create(GameValues.prototype));
  }

  name() {
    return "GameValues"
  }

  getRow(index: number): number[] {
    return this[index];
  }

  getValue(row, column) : number {
    return this.getRow(row)[column];
  }

  cellIsEmpty(row, column) : boolean {
    console.log('row ' + row, + ' column ' + column)
    return this.getValue(row, column) === 0;
  }

  deserialize(input: any): GameValues {
    Object.assign(this, input);
    return this;
  }
}