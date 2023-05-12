import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ScoreService } from 'src/app/core/services/scores/score.service';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';
import { ModalFinishGameService } from './modal-finish-game.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-modal-finish-game',
  templateUrl: './modal-finish-game.component.html',
  styleUrls: ['./modal-finish-game.component.scss'],
  providers: [LoadingService],
})
export class ModalFinishGameComponent {
  userName: string = '';
  attemps: number;
  isSaved: boolean = false;

  constructor(
    private scoreService: ScoreService,
    private sharingService: SharingService,
    private modalFinishGameService: ModalFinishGameService,
    public loadingService: LoadingService,
    private router: Router
  ) {
    this.sharingService.sharingAttempsObservable.subscribe((resp) => {
      this.attemps = resp;
    });
  }

  saveScore() {
    this.isSaved = true;

    const score = {
      userName: this.userName,
      score: this.attemps,
    };
    this.scoreService
      .createScore(score)
      .subscribe(() => this.notifySavedGame());
  }

  validUserName(): boolean {
    return !(this.userName.length > 4);
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  notifySavedGame() {
    this.sharingService.sharingSaveGameObservableData = true;
    this.modalFinishGameService.hideModal();
    this.sharingService.restartGame();
    this.router.navigate(['']);
  }
}
