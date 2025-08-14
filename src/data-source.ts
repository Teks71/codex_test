import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { AppEntity } from '@/entities/app-entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [AppEntity],
  synchronize: true,
});
