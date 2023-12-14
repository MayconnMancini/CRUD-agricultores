import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule, Module } from '@nestjs/common';

import * as ormconfig from './ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot({
    ...ormconfig,
    autoLoadEntities: true,
  });
}

@Module({
  imports: [DatabaseOrmModule()],
  controllers: [],
  providers: [],
})
export class DataBaseModule {}
