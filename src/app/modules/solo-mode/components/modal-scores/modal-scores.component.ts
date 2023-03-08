import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from 'src/app/core/models/score.interface';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';

@Component({
  selector: 'app-modal-scores',
  templateUrl: './modal-scores.component.html',
  styleUrls: ['./modal-scores.component.scss'],
})
export class ModalScoresComponent {

  showModalScore$ : Observable<boolean>;
  scoresList$ : Observable<Score[]>;

  constructor(private sharingService: SharingService) {
    this.showModalScore$ = this.sharingService.sharingShowModelScoresObservable;
    this.scoresList$ = this.sharingService.sharingScoresListObservable;
  }

  closeModalScore() {
    this.sharingService.sharingShowModelScoresObservableData = false;
  }
}
