import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { Traitement } from "../Entity/Traitement";
import {getConnection} from "typeorm";
import { getManager } from 'typeorm'
import { Booking } from "../../Booking/Entity/Booking";
import { User } from "../../Authentification/Entity/User";
import { Doctors } from "../../Doctor/Entity/Doctor";


class TraitementController {
  static addTraitement = async (req: Request, res: Response) => {
      let {idbooking,maladie,explication,medicaments,dateFinTraitement}=req.body
      let traitement=new Traitement();
      traitement.idbooking=idbooking;
      traitement.maladie=maladie;
      traitement.explication=explication;
      traitement.medicaments=medicaments;
      traitement.dateFinTraitement=dateFinTraitement;

      const traitementRepository=getRepository(Traitement);
      try{
          await traitementRepository.save(traitement);
      }catch (e){
        res.status(409).send(e);
        console.log("erreur dans la creation du traitement",e);
        return;
      }
      res.status(200).send("Traitement created");
   
}
static getTraitementByUser = async(_req:any,res:any) => {
    let idPatient=_req.params.idPatient;
   try { const traitements = await getManager()
                        .createQueryBuilder()
                        .from(Traitement ,'traitement')
                        .innerJoin(Booking,'booking','traitement.idbooking=booking.idbooking')
                        .where("booking.idPatient=:idPatient",{idPatient:idPatient})
                        .getRawMany();
                        return res.status(200).send(traitements);
                    }
    catch(e)
    {
        res.status(400).send(e)

    }


 
}
static getTraitementByCurrentDate = async(_req:any,res:any) => {
    let idPatient=_req.params.idPatient;
    let current=_req.params.current;
   try { const traitements = await getManager()
                        .createQueryBuilder()
                        .from(Traitement ,'traitement')
                        .innerJoin(Booking,'booking','traitement.idbooking=booking.idbooking')
                        .innerJoin(Doctors,'doctor','doctor.IdDoc=booking.IdDoc')
                        .innerJoin(User,'user','user.idUser=doctor.IdUser')
                        .where("booking.idPatient=:idPatient",{idPatient:idPatient})
                        .andWhere("traitement.dateFinTraitement>:current",{current:current})
                        .getRawMany();
                        return res.status(200).send(traitements);
                    }
    catch(e)
    {
        res.status(400).send(e)

    }


 
}
static getAllTraitement = async( req:any,res:any) => {
    console.log(req);
    const traitements= await Traitement.find()
    return res.status(200).send(traitements);
}

}
export default TraitementController;

