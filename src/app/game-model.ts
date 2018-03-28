

export class GameModel {

  rows: number;
  columns: number;
  fields: number[][];

	constructor(rows: number, columns: number, values: number[][]) {

    this.rows = rows;
    this.columns = columns;
    this.fields = values;

    console.log('GameModel ' + this.fields)
  }
  
  cellIsEmpty(row, column) : boolean {
  	return this.fields[row][column] === 0;
  }


}