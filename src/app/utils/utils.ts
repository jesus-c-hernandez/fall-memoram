import { Card } from '../core/models/card.interface';

const shuffleArray = (inputArray: Card[]): Card[] => {
  return inputArray.sort(() => Math.random() - 0.5);
};

export { shuffleArray };
