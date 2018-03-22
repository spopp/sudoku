import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FocusDirective } from './focus.directive';

import { TileComponent } from './gameboard/tile.component';
import { GameboardComponent } from './gameboard/gameboard.component';

/*import { AppRoutingModule } from './app-routing.module';*/

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    FocusDirective,
    TileComponent,
    GameboardComponent
  ],
  imports: [
    BrowserModule/*,
    AppRoutingModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
