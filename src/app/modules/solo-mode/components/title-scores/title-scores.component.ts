import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';
import { ModalScoresService } from '../modal-scores/modal-scores.service';

@Component({
  selector: 'app-title-score',
  templateUrl: './title-scores.component.html',
  styleUrls: ['./title-scores.component.scss'],
})
export class TitleScoresComponent {
  attempts$: Observable<number>;

  constructor(
    private sharingService: SharingService,
    private modalScoreService: ModalScoresService,
    private router: Router
  ) {
    this.attempts$ = this.sharingService.sharingAttempsObservable;
  }

  goToMain() {
    this.sharingService.restartGame();
    this.router.navigate(['']);
  }

  showModalScores() {
    // this.sharingService.sharingShowModelScoresObservableData = true;
    this.modalScoreService.showModal();
  }
}
