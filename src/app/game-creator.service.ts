import { Injectable } from '@angular/core';

import { GameModel } from './game-model';

@Injectable()
export class GameCreatorService {

  gameSpec: string = '1----7-9--3--2---8--96--5----53--9---1--8---26----4---3------1--3------7';
  originalSpec: string;

  constructor() {
  	this.originalSpec = this.gameSpec;
  }

  getGame(gameSpec: string = this.gameSpec): GameModel {
    let values: number[] = [];
    let currentValue: number;

    for(let i = 0; i < gameSpec.length; i++) {
      currentValue = parseInt(gameSpec[i]) || 0;
      values.push(currentValue); 
    }

    return new GameModel(values);
  }

}