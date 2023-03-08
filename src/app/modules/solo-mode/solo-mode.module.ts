import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoloModeComponent } from './solo-mode.component';
import { TitleScoresComponent } from './components/title-scores/title-scores.component';
import { GameComponent } from './components/game/game.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalScoresComponent } from './components/modal-scores/modal-scores.component';
import { ModalFinishGameComponent } from './components/modal-finish-game/modal-finish-game.component';



@NgModule({
  declarations: [
    SoloModeComponent,
    TitleScoresComponent,
    GameComponent,
    ModalScoresComponent,
    ModalFinishGameComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SoloModeModule { }
