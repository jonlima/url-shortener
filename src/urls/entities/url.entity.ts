import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Index,
} from 'typeorm';

@Index('urls_hash_index', ['hash'], { unique: true })
@Entity('urls')
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: true, name: 'user_id' })
  userId: number;

  @Column({ length: 10, unique: true })
  hash: string;

  @Column({ name: 'original_url' })
  originalUrl: string;

  @Column({ name: 'click_count' })
  clickCount: number;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'updated_at',
    default: () => 'now()',
  })
  updatedAt: Date;

  @CreateDateColumn({
    type: 'timestamptz',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt: Date;
}
