import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Score } from '../../models/score.interface';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  constructor(private firestore: Firestore) {}

  getScores() :Observable<Score[]> {
    const scoresRef = collection(this.firestore, 'scores');
    return collectionData(scoresRef).pipe(
      map( (resp : Score[] ) => {
        return resp.slice(0, 10).sort((x, y) => x.score - y.score);
      })
    );
  }
}
