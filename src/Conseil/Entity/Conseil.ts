import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Conseil")

export class conseil extends BaseEntity{
    @PrimaryGeneratedColumn() 
    idconseil:number;
    @Column()
    IdDoc:number;
    @Column()
    IdPatient:number;
    @Column()
    obj:String;
    @Column()
    msg:String;
    @Column()
    reponse:String;
}