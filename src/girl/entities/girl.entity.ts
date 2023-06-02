import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, Generated } from 'typeorm';

@Entity()
export class Girl {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // @Generated('uuid')
  // uuid: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'varchar' })
  skill: string;

  @CreateDateColumn({ type: 'timestamp' })
  entryTime: Date;
}
