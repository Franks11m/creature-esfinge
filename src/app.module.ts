import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EsfingeModule } from './esfinge/esfinge.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EsfingeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
