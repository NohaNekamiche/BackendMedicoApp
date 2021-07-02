import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("DoctorEmploi")

export class DoctorEmploi extends BaseEntity{
@PrimaryGeneratedColumn()
id: number;
@Column()
idDoc:number;
@Column()
jourlibre:String;
@Column()
moi:String
@Column()
heurelibre:String
@Column()
periode:String



}