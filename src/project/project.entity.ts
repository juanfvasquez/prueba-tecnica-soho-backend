import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  logo: string;

  @Column()
  image: string;

  @Column()
  textColor: string;

  @Column()
  backgroundColor: string;

  @Column()
  decorationColor: string;
}
