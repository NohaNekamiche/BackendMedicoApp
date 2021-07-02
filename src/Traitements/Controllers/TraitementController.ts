import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Traitement } from "../Entity/Traitement";


class TraitementController {
  static login = async (req: Request, res: Response) => {
    //Check if phone and pwd are set
    let { phone, pwd } = req.body;
    if (!(phone && pwd)) {
      res.status(400).send();
    }

    //Get user from database
    const userRepository = getRepository(User);
    let user: User;

    if ((user = await userRepository.findOneOrFail({ where: { phone } }))) {
      if (!user.checkIfUnencryptedPasswordIsValid(pwd)) {
        console.log(pwd);
        res.status(401).send();
        return;
      }
      const token = jwt.sign(
        { idUser: user.idUser, phone: user.phone },
        config.jwtSecret,
        { expiresIn: "7d" }
      );

      //Send the jwt in the response
      res.header("auth", token).json({
        msg: "Login Sucesss",
        token: token,
      });
    } else {
      res.status(401).send();
    }
  };
}
export default AuthController;
