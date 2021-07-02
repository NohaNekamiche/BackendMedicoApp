import {Entity,  Unique, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
@Entity("traitement")
export class Traitement extends BaseEntity {

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
    dateFinTraitement: string;
}
