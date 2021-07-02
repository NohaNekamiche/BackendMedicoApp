import {Entity,  Unique, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
@Entity("booking")
export class Booking extends BaseEntity {

    @PrimaryGeneratedColumn()
    idbooking: number;

    @Column()
    idDoc: number;

    @Column()
    idPatient: number;

    @Column()
    explication: string;

    @Column()
    date: string;

    @Column()
    heure: string;

    @Column()
    Titre: string;
}
