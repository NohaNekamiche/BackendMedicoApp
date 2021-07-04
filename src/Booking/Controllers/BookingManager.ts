import { booking } from "../Entity/Booking";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

class BookingManager{
    static getAllBooking = async( req:any,res:any) => {
        console.log(req);
        const rdvs= await booking.find()
        return res.status(200).send(rdvs);
    }

  async getBookingByIdPatient(_req:Request, res:Response){
        const bookings=await booking.find({
            where :{IdPatient:_req.body.IdPatient}
        });
        res.json(bookings);
    }

    static addBooking = async (req: Request, res: Response) => {
        let {IdDoc,IdPatient,date,heure,Titre} =req.body;
        let rdv=new booking();
        rdv.IdDoc=IdDoc;
        rdv.IdPatient=IdPatient;
        rdv.date=date;
        rdv.heure=heure;
        rdv.Titre=Titre;
        console.log(rdv);
        const bookingRepository=getRepository(booking);
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

export default BookingManager;