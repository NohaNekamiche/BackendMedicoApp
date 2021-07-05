import { Request, Response } from "express";
import { getManager, getRepository } from "typeorm";
import { Doctors } from "../../Doctor/Entity/Doctor";
import {DoctorEmploi} from "../Entity/DoctorEmploi";

class DoctorEmploiManager{

    static AddEmploiByIdDoc=async(req:any,res:Response)=>{
        let {IdDoc,jourlibre,moi,heurelibre} =req.body
        let emploi=new DoctorEmploi();
        emploi.IdDoc=IdDoc;
        emploi.jourlibre=jourlibre;
        emploi.moi=moi;
        emploi.heurelibre=heurelibre;

        const emploiRepository=getRepository(DoctorEmploi);
        try{
            await emploiRepository.save(emploi);
        }
        catch(e){
            res.status(409).send(e);
            console.log("erreur",e);
            return;
        }
        res.status(200).send("Emploi created");


    }

    static getEmploiByIdDoc=async(req:any,res:any)=>{

        let idDoc=req.params.id;
        console.log(idDoc);
        try {
            const emploi= await getManager()
            .createQueryBuilder()
            .from(DoctorEmploi,"emploi")
            .innerJoin(Doctors,"Doctors","Doctors.idDoc=emploi.IdDoc")
            .where("emploi.IdDoc=:id",{id:idDoc})
            .getRawMany();
            return res.status(200).send(emploi);
    
        }
        catch (err) {
            res.status(500).send({
              message: err.message,
            });
          }
        
        }
        static deleteEmploiLibre = async (req: Request, res: Response) => {

            let IdDoc=req.params.IdDoc;
            let jourlibre=req.params.jourlibre;
            let moi=req.params.moi;
            let heurelibre=req.params.heurelibre

            console.log(IdDoc)
        
            try {
              const emploidelete = await DoctorEmploi.findOneOrFail({where :{IdDoc:IdDoc ,jourlibre:jourlibre,moi:moi,heurelibre:heurelibre}})
              await emploidelete.remove();
        
              return res.status(200).json({ message: "Emploi deleted" });
            } catch (err) {
              console.log(err);
              return res.status(500).json({ error: "Something went wrong" });
            }
          };

}

export default DoctorEmploiManager;
