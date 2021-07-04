import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn} from "typeorm";
import { User } from "../../Authentification/Entity/User";


@Entity("Doctors")

export class Doctor extends BaseEntity{
    @PrimaryGeneratedColumn() 
    idDoc:number;
  
    @OneToOne(()=>User)
    @JoinColumn({name:"idUser"})
    idUser:User;
    @Column()
    specialite:String;
    @Column()
    photo:String;
    @Column()
    latCabinet:String;
    @Column()
    langCabinet:String;
   

}