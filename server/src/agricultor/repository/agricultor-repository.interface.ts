import { Agricultor } from '../entities/agricultor.entity';
export interface IAgricultorRepository {
  saveAgricultor(agricultor: Agricultor): Promise<Agricultor>;

  findAllAgricultores(): Promise<Agricultor[]>;

  findAgricultortById(id: string): Promise<Agricultor>;

  updateAgricultor(id: string, agricultor: Agricultor): Promise<Agricultor>;

  deleteAgricultor(id: string): Promise<string>;
}
