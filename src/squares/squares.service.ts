import { Injectable } from '@nestjs/common';

@Injectable()
export class SquaresService {

  getSquare(number: number) {
    const square = number * number;
    return square;
  }

  getSquareRoot(number: number) {
    const squareRoot = Math.sqrt(number);
    return squareRoot;
  }
}