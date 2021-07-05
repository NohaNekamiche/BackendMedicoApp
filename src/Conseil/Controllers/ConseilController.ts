import { getManager, getRepository } from "typeorm";
import { Doctors } from "../../Doctor/Entity/Doctor";
import { Conseil } from "../Entity/Conseil";
import { Request, Response } from "express";

class ConseilController{
    
    static getAllConseil = async( req:any,res:any) => {
        console.log(req);
        const conseils= await Conseil.find()
        return res.status(200).send(conseils);
    }

    static getConseilsByIdPatient=async(req:any,res:any)=>{

    let idPatient=req.params.idPatient;
    console.log(idPatient);
    try {
        const conseils= await getManager()
        .createQueryBuilder()
        .from(Conseil,"conseils")
        .innerJoin(Doctors,"Doctors","Doctors.IdDoc=conseils.IdDoc")
        .where("conseils.idPatient=:patient",{patient:idPatient})
        .getRawMany();
        return res.status(200).send(conseils);

    }
    catch (err) {
        res.status(500).send({
          message: err.message,
        });
      }
    }

    static addConseil=async(req:Request,res:Response)=>{
        
        let {IdDoc,IdPatient,msg,obj,reponse} =req.body;


        let demande=new Conseil();
        demande.msg=msg;
        demande.obj=obj;
        demande.reponse=reponse;
        demande.IdDoc=IdDoc;
        demande.IdPatient=IdPatient;
        console.log(demande);
        const demandeRepository=getRepository(Conseil);
        try{
            await demandeRepository.save(demande);
        }catch (e){
          res.status(409).send(e);
          console.log("Erreur lors de la création de la demande du conseil",e);
          return;
        }
        res.status(200).send("Votre demande de conseil a été crée avec succes");
    }

/*    static docReponse=async(req:Request,res:Response)=>{
    }*/
    
}

export default ConseilController;
