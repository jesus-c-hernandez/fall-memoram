import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../../models/card.interface';
import { Score } from '../../models/score.interface';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private sharingCardListOP: BehaviorSubject<Card[]> = new BehaviorSubject<
    Card[]
  >([]);

  private sharingAttempsOP: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  private sharingShowModalScoresOP: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private sharingShowLoadingOP: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  private sharingScoresListOP: BehaviorSubject<Score[]> = new BehaviorSubject<
    Score[]
  >([]);

  private sharingFinishGameOP: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private sharingSaveGameOP: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  // ====== Getters and Setters ======

  get sharingCardListObservable() {
    return this.sharingCardListOP.asObservable();
  }

  set sharingCardListObservableData(data: Card[]) {
    this.sharingCardListOP.next(data);
  }

  get sharingAttempsObservable() {
    return this.sharingAttempsOP.asObservable();
  }

  set sharingAttempsObservableData(data: number) {
    this.sharingAttempsOP.next(data);
  }

  get sharingShowModelScoresObservable() {
    return this.sharingShowModalScoresOP.asObservable();
  }

  set sharingShowModelScoresObservableData(data: boolean) {
    this.sharingShowModalScoresOP.next(data);
  }

  get sharingShowLoadingObservable() {
    return this.sharingShowLoadingOP.asObservable();
  }

  set sharingShowLoadingObservableData(data: boolean) {
    this.sharingShowLoadingOP.next(data);
  }

  get sharingScoresListObservable() {
    return this.sharingScoresListOP.asObservable();
  }

  set sharingScoresListObservableData(data: Score[]) {
    this.sharingScoresListOP.next(data);
  }

  get sharingFinishGameObservable() {
    return this.sharingFinishGameOP.asObservable();
  }

  set sharingFinishGameObservableData(data: boolean) {
    this.sharingFinishGameOP.next(data);
  }

  get sharingSaveGameObservable() {
    return this.sharingSaveGameOP.asObservable();
  }

  set sharingSaveGameObservableData(data: boolean) {
    this.sharingSaveGameOP.next(data);
  }

  restartGame() {
    this.sharingAttempsObservableData = 0;
    this.sharingSaveGameObservableData = false;
    this.sharingFinishGameObservableData = false;
  }
}
