import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type AgricultorType = 'pf' | 'pj';

@Entity()
export class Agricultor {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'varchar' })
  public razaoSocial: string;

  @Column({ type: 'varchar' })
  public nomeFantasia: string;

  @Column({ type: 'enum', enum: ['pf', 'pj'], default: 'pj' })
  public tipo: AgricultorType;

  @Column({ type: 'varchar' })
  public cnpjCpf: string;

  @Column({ type: 'varchar', nullable: true })
  public celular: string;

  @Column({ type: 'varchar' })
  public cidade: string;

  @Column({ type: 'varchar' })
  public estado: string;
}
