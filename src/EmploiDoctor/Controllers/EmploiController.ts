import { Request, Response } from "express";
import { getManager, getRepository } from "typeorm";
import { Doctors } from "../../Doctor/Entity/Doctor";
import {DoctorEmploi} from "../Entity/DoctorEmploi";

class DoctorEmploiManager{

    static AddEmploiByIdDoc=async(req:any,res:Response)=>{
        let {IdDoc,dateLibre,heure} =req.body
        let emploi=new DoctorEmploi();
        emploi.IdDoc=IdDoc;
        emploi.dateLibre=dateLibre;
        emploi.heure=heure;
      

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
    static getTimeByIdDocDate=async(req:any,res:any)=>{
        let idDoc=req.params.id;
        let date=req.params.date;
        try{
            const emploi=await getManager()
            .createQueryBuilder()
            .select("heure")
            .from(DoctorEmploi,"emploi")
            .where("emploi.dateLibre=:date",{date:date})
            .getRawMany();
            return res.status(200).send(emploi);

        }catch(err) {
          res.status(500).send({
            message: err.message,
          });
        }
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
            let dateLibre=req.params.dateLibre;
      

            console.log(IdDoc)
        
            try {
              const emploidelete = await DoctorEmploi.findOneOrFail({where :{IdDoc:IdDoc ,dateLibre:dateLibre}})
              await emploidelete.remove();
        
              return res.status(200).json({ message: "Emploi deleted" });
            } catch (err) {
              console.log(err);
              return res.status(500).json({ error: "Something went wrong" });
            }
          };

}

export default DoctorEmploiManager;
