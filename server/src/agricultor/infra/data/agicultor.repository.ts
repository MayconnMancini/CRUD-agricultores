import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { Agricultor } from 'src/agricultor/entities/agricultor.entity';
import { IAgricultorRepository } from 'src/agricultor/repository/agricultor-repository.interface';

@Injectable()
export class AgricultorRepository
  extends Repository<Agricultor>
  implements IAgricultorRepository
{
  constructor(private dataSource: DataSource) {
    super(Agricultor, dataSource.createEntityManager());
  }
  async saveAgricultor(agricultor: Agricultor): Promise<Agricultor> {
    return await this.save(agricultor);
  }
  async findAllAgricultores(): Promise<Agricultor[]> {
    return await this.find();
  }
  async findAgricultortById(id: string): Promise<Agricultor> {
    return await this.findOneBy({ id: id });
  }
  async updateAgricultor(
    id: string,
    agricultor: Agricultor
  ): Promise<Agricultor> {
    return await this.save(agricultor);
  }
  async deleteAgricultor(id: string): Promise<string> {
    await this.delete(id);
    return 'Dado deletado com sucesso ';
  }
}
