import { Injectable } from '@angular/core';

import { GameModel } from './game-model';

@Injectable()
export class GameCreatorService {

  gameSpec: string = '123457090030020008009600500005300900010080002600004003000000100300000070000001234';
  originalSpec: string;

  constructor() {
  	this.originalSpec = this.gameSpec;
  }

  getGame(gameSpec: string = this.gameSpec): GameModel {
    let values: number[] = [];
    let currentValue: number;

    for(let i = 0; i < gameSpec.length; i++) {
      currentValue = parseInt(gameSpec[i]);
      values.push(currentValue); 
    }

    return new GameModel(values);
  }

}