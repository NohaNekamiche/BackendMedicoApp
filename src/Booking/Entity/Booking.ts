import {Entity,  Unique, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
@Entity("booking")
export class Booking extends BaseEntity {

    @PrimaryGeneratedColumn()
    idtraitement: number;

    @Column()
    idbooking: number;

    @Column()
    maladie: string;

    @Column()
    explication: string;

    @Column()
    medicaments: string;

    @Column()
    dateFintraitement: Date;
}
