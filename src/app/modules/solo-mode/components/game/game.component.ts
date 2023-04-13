import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/models/card.interface';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';
import { MainCardComponent } from './components/main-card/main-card.component';
import { FileService } from 'src/app/core/services/file/file.service';
import { ModalFinishGameService } from '../modal-finish-game/modal-finish-game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @ViewChild(MainCardComponent) mainCardComponent: MainCardComponent;

  cards$: Observable<Card[]>;

  cardOne: Card;
  cardTwo: Card;

  attemps: number = 0;
  cardsToFlip: number = 28;

  constructor(
    private sharingService: SharingService,
    private modalFinishGameService: ModalFinishGameService,
    fileService: FileService
  ) {
    this.cards$ = fileService.getCards();
  }

  selectCard(card: Card) {
    if (!this.cardOne) {
      this.cardOne = card;
    } else {
      this.cardTwo = card;
      this.validMatch(this.cardOne, this.cardTwo);
    }
  }

  validMatch(cardOne: Card, cardTwo: Card) {
    if (cardOne.id === cardTwo.id) {
      this.validWin();
    } else {
      setTimeout(() => {
        this.mainCardComponent.backCards(cardOne, cardTwo);
      }, 1000);
    }
    this.cardOne = null;
    this.cardTwo = null;
    this.increaseAttemps();
  }

  increaseAttemps() {
    this.attemps = this.attemps + 1;
    this.sharingService.sharingAttempsObservableData = this.attemps;
  }

  validWin() {
    this.cardsToFlip = this.cardsToFlip - 2;
    if (this.cardsToFlip === 0) {
      this.modalFinishGameService.showModal();
    }
  }
}
