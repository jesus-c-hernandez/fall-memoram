import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { SoloModeComponent } from './solo-mode.component';
import { GameComponent } from './components/game/game.component';
import { TitleScoresComponent } from './components/title-scores/title-scores.component';
import { MainCardComponent } from './components/game/components/main-card/main-card.component';
import { ModalScoresComponent } from './components/modal-scores/modal-scores.component';
import { ModalFinishGameComponent } from './components/modal-finish-game/modal-finish-game.component';


@NgModule({
  declarations: [
    SoloModeComponent,
    TitleScoresComponent,
    GameComponent,
    MainCardComponent,
    ModalScoresComponent,
    ModalFinishGameComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgOptimizedImage,
    SharedModule,
  ]
})
export class SoloModeModule { }
