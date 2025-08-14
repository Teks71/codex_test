import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'app', primaryKeyConstraintName: 'pk_app' })
export class AppEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt!: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  updatedAt!: Date;

  @Column({ type: 'text', nullable: true })
  logo?: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'text', nullable: true, name: 'appstore_link' })
  appstoreLink?: string;

  @Column({ type: 'boolean', default: false, name: 'is_new' })
  isNew!: boolean;

  @Column({ type: 'boolean', default: false, name: 'is_updated' })
  isUpdated!: boolean;

  @Column({ type: 'uuid', name: 'category_id' })
  categoryId!: string;

  @Column({ type: 'jsonb', nullable: true })
  screens?: Record<string, unknown>;
}
