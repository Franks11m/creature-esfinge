/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateEsfingeDto } from './create-esfinge.dto';

export class UpdateEsfingeDto extends PartialType(CreateEsfingeDto) {}
