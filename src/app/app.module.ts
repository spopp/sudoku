import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import { NgClass } from '@angular/common';*/

import { FocusDirective } from './focus.directive';
import { GameboardComponent } from './gameboard/gameboard.component';
import { GameCreatorService } from './game-creator.service';
import { GameSolutionService } from './game-solution.service';
/*import { AppRoutingModule } from './app-routing.module';*/

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    GameboardComponent
  ],
  imports: [
    BrowserModule/*,
    AppRoutingModule*/
  ],
  providers: [
    GameCreatorService,
    GameSolutionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
