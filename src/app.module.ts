import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SquaresModule } from './squares/squares.module';

@Module({
  imports: [SquaresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
