import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("report")
export class Report {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("int")
  rating: number;

  @Column("text")
  note: string;

  @CreateDateColumn()
  when: Date;
}
