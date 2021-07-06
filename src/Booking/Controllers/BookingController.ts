import { Booking } from "../Entity/Booking";
import { getManager, getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../../Authentification/Entity/User";
import { Doctors } from "../../Doctor/Entity/Doctor";

class BookingController{
    static getAllBooking = async( req:any,res:any) => {
        console.log(req);
        const rdvs= await Booking.find()
        return res.status(200).send(rdvs);
    }

  static getBookingByIdPatient=async(_req:any, res:any)=>{
        const bookings=await Booking.find({
            where :{IdPatient:_req.params.IdPatient}
        });
        res.status(200).send(bookings)
    }

    static addBooking = async (req: Request, res: Response) => {

        try {
            const rdv= Booking.create({
               IdDoc:req.body.IdDoc,
               IdPatient:req.body.IdPatient,
               date:req.body.date,
               heure:req.body.heure,
               Titre:req.body.Titre
            })
            await rdv.save()
            console.log(rdv)
            res.status(200).json({
                msg:"Votre rendez-vous a ete crée avec succes",
                booking:rdv
            });
            
    
        } catch (e) {
            res.status(409).send(e);
          console.log("Erreur lors de la création du rendez-vous",e);
          return;
        }

    }
    static getBookingByIdPatientIdDoc=async(req:any,res:any)=>{

        let idPatient=req.params.idPatient;
        console.log(idPatient);
        try {
            const conseils= await getManager()
            .createQueryBuilder()
            .from(Booking,"booking")
            .innerJoin(Doctors,"doctor","booking.IdDoc=doctor.IdDoc")
            .innerJoin(User,"user","user.idUser=doctor.IdUser")
            .where("boooking.idPatient=:patient",{patient:idPatient})
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
 

export default BookingController;