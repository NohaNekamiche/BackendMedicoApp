import { Request, Response } from "express";
import { getConnection } from "typeorm";
import {Doctors} from "../entity/Doctor";



export async function getDoctors(_req: Request, res: Response) {
    const doctors=await Doctors.find()
    res.json(doctors)
    
}

export const getDoctorsBySpeciality=async(_req: Request, res: Response)=>{
    try {
        const doctors= await getConnection()
        .createQueryBuilder()
        .select("Doctors")
        .from(Doctors,"Doctors")
        .where("Doctors.specialite : spec",{spec:_req.params.specialite})
        .getMany();
        res.status(200).send(doctors);

    }
    catch (err) {
        res.status(500).send({
          message: err.message,
        });
      }
}

