import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Doctors")
export class Doctors extends BaseEntity {

    @PrimaryGeneratedColumn()
    idDoc: number;
    @Column()
    idUser :number;
    @Column()
    specialite:String;
    @Column()
    photo:String;
    @Column()
    latCabinet:String;
    @Column()
    langCabinet:String;
}