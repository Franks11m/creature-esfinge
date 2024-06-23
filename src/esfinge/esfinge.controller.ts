/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EsfingeService } from './esfinge.service';
import { CreateEsfingeDto } from './dto/create-esfinge.dto';
import { UpdateEsfingeDto } from './dto/update-esfinge.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('esfinge')
@ApiTags('esfinges')
export class EsfingeController {
  constructor(private readonly esfingeService: EsfingeService) {}

  @Post()
  create(@Body() createEsfingeDto: CreateEsfingeDto) {
    return this.esfingeService.create(createEsfingeDto);
  }

  @Get()
  findAll() {
    return this.esfingeService.findAllAlive();
  }

  @Get ('extinct')//localhost:3000/creature/extinct
  findAllExtinct() {
    return this.esfingeService.findAllExtinct();
  }

  @Get(':id')//localhost:3000/creature/extinct
  findOne(@Param('id') id: string) {
    return this.esfingeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEsfingeDto: UpdateEsfingeDto) {
    return this.esfingeService.update(+id, updateEsfingeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.esfingeService.remove(+id);
  }
}
