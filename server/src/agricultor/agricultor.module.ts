import { Module } from '@nestjs/common';
import { AgricultoresService } from './agricultor.service';
import { AgricultoresController } from './agricultor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agricultor } from './entities/agricultor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agricultor])],
  controllers: [AgricultoresController],
  providers: [AgricultoresService],
})
export class AgricultoresModule {}
