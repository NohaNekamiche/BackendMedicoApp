import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity("Booking")
export class Booking extends BaseEntity {

    @PrimaryGeneratedColumn()
    idbooking:number;
    @Column()
    IdDoc :number;
    @Column()
    IdPatient:number;
    @Column()
    date:String;
    @Column()
    heure:String;
    @Column()
    Titre:String;

}



