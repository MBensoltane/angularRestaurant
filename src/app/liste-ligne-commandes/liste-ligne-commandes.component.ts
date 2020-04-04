import { Component, OnInit } from '@angular/core';
import { LigneCommande } from '../models/ligneCommande';
import { Articles } from '../models/articles';
import { ArticlesService } from '../services/articles.service';
import { Commande } from '../models/commande';
import { CommandeService } from '../services/commande.service';
import { LigneCommandeService } from '../services/ligne-commande.service';

@Component({
  selector: 'app-liste-ligne-commandes',
  templateUrl: './liste-ligne-commandes.component.html',
  styleUrls: ['./liste-ligne-commandes.component.css']
})
export class ListeLigneCommandesComponent implements OnInit {
listeLC : LigneCommande[];
listeArticles : Articles[];
listeCommande : Commande[];
  constructor(private lCService : LigneCommandeService,private artService : ArticlesService, private comService:CommandeService) { }

  ngOnInit(): void {
    this.comService.getListeCommandes().subscribe(
      data => {
        this.listeCommande=data;
      }
    )
    this.artService.getListeArticles().subscribe(
      data => {
        this.listeArticles=data;
      }
    )
    this.lCService.getListeLC().subscribe(
      data => {
        this.listeLC=data;
      }
    )
   
  }
  deleteLc(idLC : number){
    this.lCService.deleteLc(idLC).subscribe (
      data => {
        console.log(data);
        window.location.href='lignecommande/all'
      }
    )
  }

}
