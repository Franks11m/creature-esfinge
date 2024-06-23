/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EsfingeService } from './esfinge.service';
import { EsfingeController } from './esfinge.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [EsfingeController],
  providers: [EsfingeService],
  imports: [PrismaModule],
})
export class EsfingeModule {}
