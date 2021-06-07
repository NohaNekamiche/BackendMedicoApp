import { Request, Response } from "express";
import {User} from "../entity/User";

export const get =  (_req: Request, res: Response) => {
    res.end("Hello there this is my new service.");
}

export const addUser = async (req: Request, res: Response) => {
    const user = User.create({
        firstName: req.body.first,
        lastName: req.body.last,
        age: req.body.age
    })

    await user.save()
    res.send(user)
}

export async function getUsers(_req: Request, res: Response) {
    const users = await User.find();
    res.json(users)
}