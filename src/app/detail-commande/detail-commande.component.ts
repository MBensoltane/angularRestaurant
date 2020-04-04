import { Component, OnInit } from '@angular/core';
import { LigneCommande } from '../models/ligneCommande';
import { LigneCommandeService } from '../services/ligne-commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {
listeLigneCommande:LigneCommande[];
  constructor() { }

  ngOnInit(): void {

  }
}