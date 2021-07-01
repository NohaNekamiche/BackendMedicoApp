import {Entity,  Unique, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import * as bcrypt from "bcryptjs";
@Entity("Users")
@Unique(["phone"])
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    idUser: number;
    @Column()
    name: string;

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
    hashPassword() {
        this.pwd = bcrypt.hashSync(this.pwd, 8);
      }
    
      checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
   
        console.log(unencryptedPassword);
        console.log(bcrypt.compareSync(unencryptedPassword, this.pwd));
        console.log(this.pwd);
        
        return bcrypt.compareSync(unencryptedPassword, this.pwd)
      }

}
