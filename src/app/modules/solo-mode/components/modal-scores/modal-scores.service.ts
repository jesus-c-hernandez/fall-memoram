import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalScoresService {
  private subject = new BehaviorSubject<boolean>(false);

  seeModal$: Observable<boolean> = this.subject.asObservable();

  showModal() {
    this.subject.next(true);
  }

  hideModal() {
    this.subject.next(false);
  }
}
