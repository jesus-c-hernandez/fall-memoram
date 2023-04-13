import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../../models/card.interface';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private sharingAttempsOP: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  private sharingSaveGameOP: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  // ====== Getters and Setters ======

  get sharingAttempsObservable() {
    return this.sharingAttempsOP.asObservable();
  }

  set sharingAttempsObservableData(data: number) {
    this.sharingAttempsOP.next(data);
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
  }
}
