import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
