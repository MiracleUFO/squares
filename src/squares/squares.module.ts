import { Module } from '@nestjs/common';

import { SquaresController } from './squares.controller';
import { SquaresService } from './squares.service';

@Module({
  controllers: [SquaresController],
  providers: [SquaresService]
})

export class SquaresModule {}