import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { Score, ScoreCreate } from '../../models/score.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  URL = environment.url;

  constructor(private http: HttpClient) {}

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>(`${this.URL}score`).pipe(shareReplay());
  }

  createScore({ userName, score }: ScoreCreate) {
    return this.http.post(`${this.URL}score`, {
      userName: userName,
      score: score,
    });
  }
}
