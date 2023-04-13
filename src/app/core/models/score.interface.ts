export interface Score {
  createdAt: string;
  userName: string;
  score: number;
}

export type ScoreCreate = Omit<Score, 'createdAt'>;
