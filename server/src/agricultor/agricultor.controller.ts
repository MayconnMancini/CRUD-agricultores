import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgricultoresService } from './agricultor.service';
import { CreateAgricultorDto } from './dto/create-agricultor.dto';
import { UpdateAgricultorDto } from './dto/update-agricultor.dto';

@Controller('agricultores')
export class AgricultoresController {
  constructor(private readonly agricultoresService: AgricultoresService) {}

  @Post()
  create(@Body() createAgricultoreDto: CreateAgricultorDto) {
    return this.agricultoresService.create(createAgricultoreDto);
  }

  @Get()
  findAll() {
    return this.agricultoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agricultoresService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAgricultoreDto: UpdateAgricultorDto
  ) {
    return this.agricultoresService.update(id, updateAgricultoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agricultoresService.remove(id);
  }
}
