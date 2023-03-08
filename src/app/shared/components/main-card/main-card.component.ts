import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/core/models/card.interface';
import { SharingService } from 'src/app/core/services/sharing/sharing.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent {
  cards$: Observable<Card[]>;
  cardOne: Card;
  cardTwo: Card;

  attemps: number = 0;
  cardsToFlip: number = 28;

  constructor(private sharingService: SharingService) {
    this.cards$ = sharingService.sharingCardListObservable;
  }

  flipCard(card: Card) {
    if (!card.isFliped) {
      card.isFliped = !card.isFliped;
      if (!this.cardOne) {
        this.cardOne = card;
      } else {
        this.cardTwo = card;
        this.validMatch(this.cardOne, this.cardTwo);
      }
    }
  }

  validMatch(cardOne: Card, cardTwo: Card) {
    if (cardOne.id === cardTwo.id) {
      cardOne.isFliped = true;
      cardTwo.isFliped = true;
      this.validWin();
    } else {
      setTimeout(() => {
        cardOne.isFliped = false;
        cardTwo.isFliped = false;
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
      console.log('YOU WIN');
    }
  }
}
