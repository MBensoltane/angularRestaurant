import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/reservation';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent implements OnInit {
listeReservation : Reservation[];
listeUtilisateur : Utilisateur[];
 
  constructor(private reservationService : ReservationService , private utilisateurService : UtilisateursService) { }

  ngOnInit(): void {
    this.reservationService.getListeReservation().subscribe(
      data => {
        this.listeReservation=data;
      }
    )
    this.utilisateurService.getListeUtilisateur().subscribe(
      data => {
        this.listeUtilisateur=data;
      }
    )
}
deleteReservation(idR : number){
  this.reservationService.deleteReservation(idR).subscribe (
    data => {
      console.log(data);
      window.location.href='reservation/all'
    }
  )
}
updatereservation(idR : number , reservation : Reservation){
  this.reservationService.updateReservation(idR,reservation).subscribe(
    data => {
      console.log(data);
      window.location.href='utilisateur/all'
    }
  )
}
}