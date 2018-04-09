import { Injectable } from '@angular/core';

import { GameModel } from './game-model';

@Injectable()
export class GameCreatorService {

  rows = 9;
  columns = 9;
  values: number[][] = [
    [1,0,0,0,0,7,0,9,0],
    [0,3,0,0,2,0,0,0,8],
    [0,0,9,6,0,0,5,0,0],
    [0,0,5,3,0,0,9,0,0],
    [0,1,0,0,8,0,0,0,2],
    [6,0,0,0,0,4,0,0,0],
    [3,0,0,0,0,0,0,1,0],
    [0,4,0,0,0,0,0,0,7],
    [0,0,7,0,0,0,3,0,0]]


  public getGame(rows=this.rows, columns=this.columns, values=this.values): GameModel {
    console.log('game-creator.service ' + this.values);
    return new GameModel(this.rows, this.columns, this.values);
  }

  public import(game: GameModel) : GameModel {
    return new GameModel(game.rows, game.columns, game.values);
  }
    
  public export() : GameModel {
    return new GameModel(this.rows, this.columns, this.values);
  }


}