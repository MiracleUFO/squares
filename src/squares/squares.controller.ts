import { Controller, Get, Param } from '@nestjs/common';

import { SquaresService } from './squares.service';

@Controller()
export class SquaresController {
  
  constructor(private readonly squaresService: SquaresService) {}

  @Get('/square/:number')
  calculateSquare(@Param('number') number): any {
    const square = this.squaresService.getSquare(number);
    return {square: square};
  }

  @Get('/square-root/:number')
  calculateSquareRoot(@Param('number') number): any {
    const squareRoot = this.squaresService.getSquareRoot(number);
    return {squareRoot: squareRoot};
  }
}