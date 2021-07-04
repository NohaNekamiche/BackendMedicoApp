import { Booking } from "../Entity/Booking";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

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
        let {IdDoc,IdPatient,date,heure,Titre} =req.body;
        let rdv=new Booking();
        rdv.IdDoc=IdDoc;
        rdv.IdPatient=IdPatient;
        rdv.date=date;
        rdv.heure=heure;
        rdv.Titre=Titre;
        console.log(rdv);
        const bookingRepository=getRepository(Booking);
        try{
            await bookingRepository.save(rdv);
        }catch (e){
          res.status(409).send(e);
          console.log("erreur",e);
          return;
        }
        res.status(200).send("rdv created");


     
    }
}

export default BookingController;