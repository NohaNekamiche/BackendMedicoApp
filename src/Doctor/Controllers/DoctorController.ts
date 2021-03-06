import { Request, Response } from "express";
import { getRepository, getManager } from "typeorm";
import { User } from "../../Authentification/Entity/User";
import {Doctors} from "../Entity/Doctor";
class DoctorController {

  static getDoctors= async(_req:any,res:any)=> {
    const doctors=await Doctors.find()
    return res.status(200).send(doctors);
    
}

 static getDoctorsBySpeciality=async(_req:Request,res:any)=>{
   let spec=_req.params.spec;
    console.log(spec);
    try {
        const doctors= await getManager()
        .createQueryBuilder()
        .from(Doctors,"Doctors")
        .innerJoin(User,"user","Doctors.idUser=user.idUser")
        .where("Doctors.specialite=:specialite",{specialite:spec})
        .getRawMany();
        return res.status(200).send(doctors);

    }
    catch (err) {
        res.status(500).send({
          message: err.message,
        });
      }
}

static getDoctorById=async(_req:any,res:any)=>{
  let idDoc=_req.params.idDoc;
  console.log(idDoc);
  try{
    const doctors= await getManager()
    .createQueryBuilder()
    .from(Doctors,"Doctors")
    .innerJoin(User,"user","Doctors.idUser=user.idUser")
    .where("Doctors.idDoc=:idDoc",{idDoc:idDoc})
    .getRawMany();
        return res.status(200).send(doctors);
  }
  catch(err){
    res.status(500).send({
      message: err.message,
    });
  }

}

static addDoctor=async(req: Request, res: Response)=>{

  let {idUser,specialite,photo,latCabinet,langCabinet} =req.body;
  let doc=new Doctors();
  doc.idUser=idUser;
  doc.specialite=specialite;
  doc.photo=photo;
  doc.latCabinet=latCabinet;
  doc.langCabinet=langCabinet;
  console.log(doc);
  const docRepository=getRepository(Doctors);
  try{
      await docRepository.save(doc);
  }catch (e){
    res.status(409).send(e);
    console.log("erreur",e);
    return;
  }
  res.status(200).send("rdv created");
}
}
export default DoctorController;           