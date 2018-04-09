import { Injectable } from '@angular/core';

import { GameModel } from './shared/game.model';
import { GameValues } from './shared/game-values.model';


@Injectable()
export class GameCreatorService {

  rows = 9;
  columns = 9;
  values: GameValues;
  startValues: number [][] = [
    [1,0,0,0,0,7,0,9,0],
    [0,3,0,0,2,0,0,0,8],
    [0,0,9,6,0,0,5,0,0],
    [0,0,5,3,0,0,9,0,0],
    [0,1,0,0,8,0,0,0,2],
    [6,0,0,0,0,4,0,0,0],
    [3,0,0,0,0,0,0,1,0],
    [0,4,0,0,0,0,0,0,7],
    [0,0,7,0,0,0,3,0,0]];


  public getGame() {
    this.values = new GameValues().deserialize(this.startValues);
    return new GameModel().deserialize(this);
  }

}