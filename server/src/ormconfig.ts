import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

const ConfigTemplate: DataSourceOptions = {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  logging: false,
  synchronize: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/**/migrations/**/*.{ts,js}'],
  migrationsTableName: 'migration',
  //cli: {
  //  migrationsDir: 'src/migrations',
  //},
};

export = ConfigTemplate;
