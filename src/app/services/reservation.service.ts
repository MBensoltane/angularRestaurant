import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  getListeReservation(){
    return this.http.get<Reservation[]>("http://localhost:8080/Reservation/getReservation").pipe();
      }
  createReservation(reservation : Reservation){
return this.http.post<Reservation>("http://localhost:8080/Reservation/addreservation",reservation).pipe();
  }
  deleteReservation(idR:number){
    return this.http.delete<Reservation>("http://localhost:8080/Reservation/deleteReservation/"+idR).pipe();
  }
  findReservation(idR:number){
    return this.http.get<Reservation>("http://localhost:8080/Reservation/findReservation/"+idR).pipe();
  }
  updateReservation(idR:number,reservation : Reservation ){
    return this.http.post<Reservation>("http://localhost:8080/Reservation/updateReservation/"+idR,reservation).pipe();
  }
}
