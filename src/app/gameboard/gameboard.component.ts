import { Component, OnInit,  Input } from '@angular/core';

import { FocusDirective } from "../focus.directive";  
import { GameModel } from '../shared/game.model';

import { GameCreatorService } from '../game-creator.service';
import { GameSolutionService } from '../game-solution.service';


@Component({
  selector: 'gameboard-component',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
  providers: [
    GameCreatorService,
    GameSolutionService
  ]
})
export class GameboardComponent implements OnInit {

  @Input('focus')

  game: GameModel;
  originalGame: GameModel;
  columnPos: number = 0; 
  rowPos: number = 0;


  constructor(
    private creatorService: GameCreatorService,
    private solutionService: GameSolutionService) {}

  ngOnInit() {
    this.game = this.updateGame();
    this.originalGame = new GameModel().deserialize(this.game);
    console.log('gameboard.component ngOnInit ' + this.game);
  }

  updateGame(): GameModel {
    return this.creatorService.getGame();
  }

  format(value: number) : any {
    return (value > 0) ? String(value) : '';
  }

  cellIsEmpty(row, column) :boolean {
    return this.game.cellIsEmpty(row, column);
  }

  onKey($event) :void {
    let keyCode = $event.keyCode;
    
    if (keyCode === 37) { //left arrow
      /*console.log('left arrow');*/
      this.columnPos -= 1;
      if (this.columnPos < 0) this.columnPos = 8;
    } else if (keyCode === 38) { //up arrow
      /*console.log('up arrow');*/
      this.rowPos -= 1;
      if (this.rowPos < 0) this.rowPos = 8;
    } else if (keyCode === 39) { //right arrow
      /*console.log('right arrow');*/
      this.columnPos += 1;
      if (this.columnPos > 8) this.columnPos = 0;
    } else if (keyCode === 40) { //down arrow
      /*console.log('down arrow');*/
      this.rowPos += 1;
      if (this.rowPos > 8) this.rowPos = 0;
    }
  }

  onChanged(event: any): void {
    console.log(event);
  }

  solve(): void {
    this.solutionService.solve(this.game)
  }

}
