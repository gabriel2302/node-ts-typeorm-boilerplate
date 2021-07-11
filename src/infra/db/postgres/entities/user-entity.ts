import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ type: 'character varying' })
  name: string

  @Column({ type: 'character varying' })
  description: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
