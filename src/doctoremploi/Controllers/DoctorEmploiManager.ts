import { Request, Response } from "express";
import { getManager, getRepository } from "typeorm";
import { Doctor } from "../../doctor/Entity/Doctor";
import {DoctorEmploi} from "../entity/DoctorEmploi";

class DoctorEmploiManager{

    static AddEmploiByIdDoc=async(req:Request,res:Response)=>{
        let {idDoc,jourlibre,moi,heurelibre,periode} =req.body
        let emploi=new DoctorEmploi();
        emploi.idDoc=idDoc;
        emploi.jourlibre=jourlibre;
        emploi.heurelibre=heurelibre;
        emploi.moi=moi;
        emploi.periode=periode;
        const emploiRepository=getRepository(DoctorEmploi);
        try{
            await emploiRepository.save(emploi);
        }
        catch(e){
            res.status(409).send(e);
            console.log("erreur",e);
            return;
        }

    }

    static getEmlpoByIdDoc=async(req:any,res:any)=>{

        let idDoc=req.params.id;
        console.log(idDoc);
        try {
            const conseils= await getManager()
            .createQueryBuilder()
            .from(DoctorEmploi,"emploi")
            .innerJoin(Doctor,"Doctors","Doctors.idDoc=emploi.idDoc")
            .where("emploi.idDoc=:id",{id:idDoc})
            .getRawMany();
            return res.status(200).send(conseils);
    
        }
        catch (err) {
            res.status(500).send({
              message: err.message,
            });
          }
        
        }

}

export default DoctorEmploiManager;