import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AgricultorType } from '../entities/agricultor.entity';

export class CreateAgricultorDto {
  @IsNotEmpty({ message: 'Razão Social é obrigatório' })
  @IsString({ message: 'Razão Social deve ser do tipo string' })
  public razaoSocial: string;

  @IsNotEmpty({ message: 'Nome fantasia é obrigatório' })
  @IsString({ message: 'Nome fantasia deve ser do tipo string' })
  public nomeFantasia: string;

  @IsNotEmpty({ message: 'Tipo de cliente é obrigatório' })
  public tipo: AgricultorType;

  @IsNotEmpty({ message: 'CNPJ/CPF é obrigatório' })
  @IsString({ message: 'CNPJ/CPF deve ser do tipo string' })
  public cnpjCpf: string;

  @IsOptional()
  @IsString({ message: 'Celular deve ser do tipo string' })
  public celular: string;

  @IsNotEmpty({ message: 'Cidade é obrigatório' })
  @IsString({ message: 'Cidade deve ser do tipo string' })
  public cidade: string;

  @IsNotEmpty({ message: 'Estado é obrigatório' })
  @IsString({ message: 'Estado deve ser do tipo string' })
  public estado: string;
}
