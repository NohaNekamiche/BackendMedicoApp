import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { Traitement } from "../Entity/Traitement";
import {getConnection} from "typeorm";


class TraitementController {
  static addTraitement = async (req: Request, res: Response) => {
      let {idbookig,maladie,explication,medicaments,dateFintraitement}=req.body
      let traitement=new Traitement();
      traitement.idbooking=idbookig;
      traitement.maladie=maladie;
      traitement.explication=explication;
      traitement.medicaments=medicaments;
      traitement.dateFintraitement=dateFintraitement;

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
/*static getTraitementByUser = async(req:Request,res:Response) => {
    let idbooking=req.body;
    const traitementRepository=getRepository(Traitement);
    const traitements = await getRepository(Traitement)
                        .createQueryBuilder("traitement")
                        .innerJoinAndSelect("traitement.idbooking","idbooking")


    res.send(traitements);
 
}*/
static getAllTraitement = async(req:Request, res:Response) => {
    const traitementRepository=getRepository(Traitement);
    const traitements= await traitementRepository.find();
    res.send(traitements);


}

}
export default TraitementController;

