import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("Users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    username: string;

    @Column()
    adr: string;

    @Column()
    phone: string;

    @Column()
    pwd: string;

    @Column()
    role: number;

}
