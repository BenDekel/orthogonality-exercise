import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BusinessType } from '../types';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  location: string;

  @Column({ nullable: true, type: 'enum', enum: BusinessType })
  type: BusinessType;
}
