import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
listeUtilisateur : Utilisateur[];
newReservation : Reservation = new Reservation();
  constructor(private reservationService: ReservationService, private utlisateurService:UtilisateursService) { }

  ngOnInit(): void {
    this.utlisateurService.getListeUtilisateur().subscribe(
      data => {
        this.listeUtilisateur=data;
      }
    )
  }
  createReservation (){
    this.reservationService.createReservation(this.newReservation).subscribe(
      data => { console.log(data)
        console.log("ajout reservation reussi")
      }
    )
  }

}
