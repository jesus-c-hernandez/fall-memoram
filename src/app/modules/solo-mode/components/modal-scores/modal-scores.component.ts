import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from 'src/app/core/models/score.interface';
import { ScoreService } from 'src/app/core/services/scores/score.service';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ModalScoresService } from './modal-scores.service';

@Component({
  selector: 'app-modal-scores',
  templateUrl: './modal-scores.component.html',
  styleUrls: ['./modal-scores.component.scss'],
  providers: [LoadingService],
})
export class ModalScoresComponent {
  scoresList$: Observable<Score[]>;

  constructor(
    public loadingService: LoadingService,
    public modalScoreService: ModalScoresService,
    scoreService: ScoreService
  ) {
    this.scoresList$ = scoreService.getScores();
    this.loadingService.showLoaderUntilComplete(this.scoresList$).subscribe();
  }

  closeModalScore() {
    this.modalScoreService.hideModal();
  }
}
