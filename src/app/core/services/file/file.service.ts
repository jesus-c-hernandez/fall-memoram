import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Card } from '../../models/card.interface';
import { shuffleArray } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private httpClient: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>('../../assets/files/cards.json').pipe(
      map((resp) => {
        return shuffleArray(resp);
      })
    );
  }
}
