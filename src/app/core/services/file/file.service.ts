import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Card } from '../../models/card.interface';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private httpClient: HttpClient) {}

  getCards() {
    return this.httpClient.get<Card[]>('../../assets/files/cards.json');
  }
}
