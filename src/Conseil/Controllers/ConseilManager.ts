import { getManager, getRepository } from "typeorm";
import { Doctor } from "../../doctor/Entity/Doctor";
import { conseil } from "../Entity/Conseil";
import { Request, Response } from "express";

class ConseilManager{
    
    static getAllConseil = async( req:any,res:any) => {
        console.log(req);
        const conseils= await conseil.find()
        return res.status(200).send(conseils);
    }

    static getConseilsByIdPatient=async(req:any,res:any)=>{

    let idPatient=req.params.idPatient;
    console.log(idPatient);
    try {
        const conseils= await getManager()
        .createQueryBuilder()
        .from(conseil,"conseils")
        .innerJoin(Doctor,"Doctors","Doctors.idDoc=conseils.idDoc")
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


        let demande=new conseil();
        demande.msg=msg;
        demande.obj=obj;
        demande.reponse=reponse;
        demande.IdDoc=IdDoc;
        demande.IdPatient=IdPatient;
        console.log(demande);
        const demandeRepository=getRepository(conseil);
        try{
            await demandeRepository.save(demande);
        }catch (e){
          res.status(409).send(e);
          console.log("erreur",e);
          return;
        }
        res.status(200).send("demande send");
    }

/*    static docReponse=async(req:Request,res:Response)=>{


    }*/
    
}

export default ConseilManager;