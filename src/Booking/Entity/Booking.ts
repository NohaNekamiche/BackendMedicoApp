import {Entity,  Unique, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
@Entity("booking")
export class Booking extends BaseEntity {

    @PrimaryGeneratedColumn()
    idbooking: number;

    @Column()
    IdDoc: number;

    @Column()
    IdPatient: number;


    @Column()
    jour: string;
    @Column()
    mois: string;

    @Column()
    heure: string;

    @Column()
    Titre: string;
}
