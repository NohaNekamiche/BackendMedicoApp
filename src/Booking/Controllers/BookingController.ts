import { Booking } from "../Entity/Booking";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { DoctorEmploi } from "../../EmploiDoctor/Entity/DoctorEmploi";

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
                jour:req.body.jour,
                mois:req.body.mois,
                heure:req.body.heure,
                Titre:req.body.Titre,
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

}

export default BookingController;