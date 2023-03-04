import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TitleComponent } from './components/title/title.component';
import { GameModeComponent } from './components/game-mode/game-mode.component';



@NgModule({
  declarations: [
    MainComponent,
    TitleComponent,
    GameModeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
