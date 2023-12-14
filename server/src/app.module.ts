import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AgricultoresModule } from './agricultor/agricultor.module';
import { DataBaseModule } from './data.base.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DataBaseModule,
    AgricultoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
