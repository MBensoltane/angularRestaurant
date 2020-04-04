import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande';
import { Reservation } from '../models/reservation';
import { CommandeService } from '../services/commande.service';
import { ReservationService } from '../services/reservation.service';
import { LigneCommandeService } from '../services/ligne-commande.service';
import { LigneCommande } from '../models/ligneCommande';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {
listeCommande : Commande[];
listeLigne : LigneCommande[];
listeReservation : Reservation[];
  constructor(private lCService:LigneCommandeService ,private comService: CommandeService, private reservationService : ReservationService) { }

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

    afficheDetailCommande(idCommande:number){
      this.lCService.afficheDetailCommande(idCommande).subscribe(
        data =>{
          this.listeLigne=data;
          console.log(data)
    console.log("afffichage réussi")
        }
      )
    }


}
