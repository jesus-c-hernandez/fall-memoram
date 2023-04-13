import { Component } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import { Card } from 'src/app/core/models/card.interface';
import { Score } from 'src/app/core/models/score.interface';
import { FileService } from 'src/app/core/services/file/file.service';
import { ScoreService } from 'src/app/core/services/scores/score.service';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';
import { ModalFinishGameService } from './components/modal-finish-game/modal-finish-game.service';

@Component({
  selector: 'app-solo-mode',
  templateUrl: './solo-mode.component.html',
  styleUrls: ['./solo-mode.component.scss'],
})
export class SoloModeComponent {
  showFinishGame$: Observable<boolean>;
  showToast$: Observable<boolean>;

  constructor(public modalFinishGameService: ModalFinishGameService) {}
}
