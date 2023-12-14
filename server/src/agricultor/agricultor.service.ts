import { HttpException, Injectable } from '@nestjs/common';
import { CreateAgricultorDto } from './dto/create-agricultor.dto';
import { UpdateAgricultorDto } from './dto/update-agricultor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agricultor } from './entities/agricultor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgricultoresService {
  constructor(
    @InjectRepository(Agricultor)
    private agricultorRepository: Repository<Agricultor>
  ) {}
  create(createAgricultorDto: CreateAgricultorDto) {
    return this.agricultorRepository.save(createAgricultorDto);
  }

  findAll() {
    return this.agricultorRepository.find();
  }

  async findOne(id: string) {
    const agricultor = await this.agricultorRepository.findOneBy({ id: id });
    return agricultor;
  }

  async update(id: string, updateAgricultorDto: UpdateAgricultorDto) {
    const agricultor = await this.agricultorRepository.findOneBy({
      id: id,
    });

    if (!agricultor) {
      throw new HttpException('Agricultor não encontrado', 400);
    }

    return await this.agricultorRepository.update(id, updateAgricultorDto);
  }

  remove(id: string) {
    return this.agricultorRepository.delete(id);
  }
}
