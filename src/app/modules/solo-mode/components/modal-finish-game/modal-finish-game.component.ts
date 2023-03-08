import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/core/services/scores/score.service';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';

@Component({
  selector: 'app-modal-finish-game',
  templateUrl: './modal-finish-game.component.html',
  styleUrls: ['./modal-finish-game.component.scss'],
})
export class ModalFinishGameComponent {
  userName: string = '';
  attemps: number;

  constructor(
    private scoreService: ScoreService,
    private router: Router,
    private sharingService: SharingService
  ) {
    this.sharingService.sharingAttempsObservable.subscribe((resp) => {
      this.attemps = resp;
    });
  }

  saveScore() {
    const date = this.getDate();
    const score = {
      userName: this.userName,
      score: this.attemps,
      date: date,
    };
    this.scoreService.createScore(score).then(() => {
      this.notifySavedGame();
    });
  }

  validUserName(): boolean {
    return !(this.userName.length > 4);
  }

  getDate() {
    return new Date().toLocaleDateString();
  }

  notifySavedGame() {
    this.sharingService.sharingSaveGameObservableData = true;
    setTimeout(() => {
      this.sharingService.restartGame();
      this.router.navigate(['']);
    }, 1500);
  }
}
  