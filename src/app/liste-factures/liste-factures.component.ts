import { Component, OnInit } from '@angular/core';
import { Facture } from '../models/facture';
import { Commande } from '../models/commande';
import { FactureService } from '../services/facture.service';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-liste-factures',
  templateUrl: './liste-factures.component.html',
  styleUrls: ['./liste-factures.component.css']
})
export class ListeFacturesComponent implements OnInit {
listeFacture : Facture[];
listeCommande : Commande[];
  constructor(private factureService : FactureService, private comService : CommandeService ) { }

  ngOnInit(): void {
    this.comService.getListeCommandes().subscribe(
      data => {
        this.listeCommande=data;
      }
    )
  
  this.factureService.getListeFacture().subscribe(
    data => {
      this.listeFacture=data;
    }
  )
}
}
