import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { User } from "../Entity/User";
import config from "../Config/config";

class AuthController {
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
        res.status(401).send("Mot de passe incorrect");
        return;
      }
      const token = jwt.sign(
        { idUser: user.idUser, phone: user.phone },
        config.jwtSecret,
        { expiresIn: "7d" }
      );

      //Send the jwt in the response
      res.header("auth", token).json({
        msg: "BIENVENUE !",
        token: token,
      });
    } else {
      res.status(401).send("Utilisateur n'existe pas !");
    }
  };
}
export default AuthController;
