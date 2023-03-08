import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/core/models/card.interface';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent {
  @Input() card: Card;
  @Output() selectedCard: EventEmitter<Card> = new EventEmitter<Card>();

  cardOne: Card;
  cardTwo: Card;

  flipCard(card: Card) {
    if (!card.isFliped) {
      this.selectedCard.emit(card);
      card.isFliped = !card.isFliped;
    }
  }

  backCards(cardOne: Card, cardTwo: Card) {
    cardOne.isFliped = false;
    cardTwo.isFliped = false;
  }
}
