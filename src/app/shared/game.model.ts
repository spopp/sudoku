import { Deserializable } from "./deserializable.model";

import { GameValues } from "./game-values.model";



export class GameModel implements Deserializable<GameModel> {

  rows: number;
  columns: number;
  values: GameValues;

	constructor() {
  }

  getRow(index): number[] {
    return this.values.getRow(index);
  }

  getValue(row, column) : number {
    return this.values.getValue(row, column);
  }
  
  cellIsEmpty(row, column) : boolean {
    return this.values.cellIsEmpty(row, column);
  }

  deserialize(input: any): GameModel {
    Object.assign(this, input);
    this.values = new GameValues().deserialize(input.values);
    return this;
  }

 
}