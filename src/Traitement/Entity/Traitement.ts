import {Entity,  OneToOne, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn} from "typeorm";
import { Booking } from "../../Booking/Entity/Booking";
@Entity("traitement")
export class Traitement extends BaseEntity {

    @PrimaryGeneratedColumn()
    idtraitement: number;

    @OneToOne(()=> Booking)
    @JoinColumn({ name: "idbooking" })
    idbooking: Booking;

    @Column()
    maladie: string;

    @Column()
    explication: string;

    @Column()
    medicaments: string;

    @Column()
    dateFinTraitement: string;
}
