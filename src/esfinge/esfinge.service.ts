/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateEsfingeDto } from './dto/create-esfinge.dto';
import { UpdateEsfingeDto } from './dto/update-esfinge.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EsfingeService {
  constructor( private prisma: PrismaService) {}

  create(createEsfingeDto: CreateEsfingeDto) {
    return this.prisma.esfinge.create({
      data: createEsfingeDto,
    });
  }

  findAllAlive() {
    return this.prisma.esfinge.findMany({
      where: { extinct: false},
    });
  }
  findAllExtinct() {
    return this.prisma.esfinge.findMany({
      where: { extinct: true },
    });
  }

  findOne(id: number) {
    return this.prisma.esfinge.findUnique({
      where: {id}
    })
  }

  update(id: number, updateEsfingeDto: UpdateEsfingeDto) {
    return this.prisma.esfinge.update({
      where: {id},
      data: updateEsfingeDto,
    })
  }

  remove(id: number) {
    return this.prisma.esfinge.delete({
      where: {id}
    });
  }
}
