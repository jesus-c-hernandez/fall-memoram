import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/models/card.interface';
import { Score } from 'src/app/core/models/score.interface';
import { FileService } from 'src/app/core/services/file/file.service';
import { ScoreService } from 'src/app/core/services/scores/score.service';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';

@Component({
  selector: 'app-solo-mode',
  templateUrl: './solo-mode.component.html',
  styleUrls: ['./solo-mode.component.scss'],
})
export class SoloModeComponent {
  showLoading$: Observable<boolean>;

  constructor(
    private fileService: FileService,
    private scoreService: ScoreService,
    private sharingService: SharingService
  ) {
    this.init();
  }

  init() {
    this.showLoading$ = this.sharingService.sharingShowLoadingObservable;
    this.fileService.getCards().subscribe((resp: Card[]) => {
      this.sharingService.sharingCardListObservableData =
        this.shuffleArray(resp);
    });
    this.scoreService.getScores().subscribe((resp: Score[]) => {
      this.sharingService.sharingScoresListObservableData = resp;
      this.finishLoading();
    });
  }

  finishLoading() {
    setTimeout(() => {
      this.sharingService.sharingShowLoadingObservableData = false;
    }, 2000);
  }

  shuffleArray(inputArray: Card[]) {
    return inputArray.sort(() => Math.random() - 0.5);
  }
}
