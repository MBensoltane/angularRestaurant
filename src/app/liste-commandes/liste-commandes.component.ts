import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande';
import { Reservation } from '../models/reservation';
import { CommandeService } from '../services/commande.service';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
listeCommande : Commande[];
listeReservation : Reservation[];
  constructor(private comService: CommandeService, private reservationService : ReservationService) { }

  ngOnInit(): void {
this.comService.getListeCommandes().subscribe(
  data => {
    this.listeCommande=data;
  }
)

    this.reservationService.getListeReservation().subscribe(
      data => {
        this.listeReservation=data;
      }
    )
    }
    deleteCommande(idCommande : number){
      this.comService.deleteCommande(idCommande).subscribe (
        data => {
          console.log(data);
          window.location.href='commande/all'
        }
      )
    }


}
