import { Component, OnInit,  Input } from '@angular/core';

import { FocusDirective } from "../focus.directive"; 

import { TileComponent } from './tile.component';

import { GameModel } from '../game-model';
import { GameCreatorService } from '../game-creator.service';



/*import { GameModel } from '../game-model';*/


@Component({
  selector: 'gameboard-component',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']/*,
  providers: [ GameCreatorService ]*/
})
export class GameboardComponent implements OnInit {

  /*game: GameModel;*/
  
  field: any[];
  columnPos: number = 0; 
  rowPos: number = 0;


  constructor(/*gameService: GameCreatorService*/) {
  	this.field = []
  }

  ngOnInit() {
    /*this.updateGame();*/
  	for (let i = 0; i < 9; i ++) {
      this.field[i] = [];
      for(let n = 0; n < 9; n ++) {
        this.field[i].push(n +1);
      }
    }
  }

  updateGame(): void {
    /*this.game = this.gameService.getGame();*/
  }

  onKey($event){
    let keyCode = $event.keyCode;
    
    if (keyCode === 37) { //left arrow
      this.columnPos -= 1;
      if (this.columnPos < 0) this.columnPos = 8;
    }else if (keyCode === 38) { //up arrow
      this.rowPos -= 1;
      if (this.rowPos < 0) this.rowPos = 8;
    }else if (keyCode === 39) { //right arrow
      this.columnPos += 1;
      if (this.columnPos > 8) this.columnPos = 0;
    }else if (keyCode === 40) { //down arrow
      this.rowPos += 1;
      if (this.rowPos > 8) this.rowPos = 0;
    }
  }

  onChanged(event: any): void {
    console.log(event  );
  }

}
