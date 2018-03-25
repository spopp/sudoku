

export class GameModel {

	rows: number;
  columns: number;
  fields: number[][];

	constructor(rows: number, columns: number, values: number[][]) {

    this.rows = rows;
    this.columns = columns;
    this.fields = values;

    console.log(this.fields)
  }
}