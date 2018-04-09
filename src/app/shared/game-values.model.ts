import { Deserializable } from "./deserializable.model";


export class GameValues implements Deserializable<GameValues> {

  values: number[][];

  constructor() {
  }

  getRow(index: number): number[] {
    return this.values[index]
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