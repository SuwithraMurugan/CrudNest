import { randomUUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  city: string;
}