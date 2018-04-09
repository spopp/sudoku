

export class GameModel {

  rows: number;
  columns: number;
  values: number[][];

	constructor(rows: number, columns: number, values: number[][]) {

    this.rows = rows;
    this.columns = columns;
    this.values = values;

    console.log('GameModel ' + this.values)
  }
  
  cellIsEmpty(row, column) : boolean {
  	return this.values[row][column] === 0;
  }

  export() : any {
    
  }

 
}