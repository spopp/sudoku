

export class GameModel {

	fields: any[];

	constructor(values: number[]) {

		this.fields = [];

    for (let i = 0; i < 9; i ++) {
      this.fields[i] = [];
      for(let n = 0; n < 9; n ++) {
        this.fields[i].push(values[i + n +1);
      }
    }

    console.log(this.fields)
	}
}