import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Role } from '../models/role';
import { UtilisateursService } from '../services/utilisateurs.service';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {
listeUtilisateur : Utilisateur[];
listeRole : Role[];
  constructor(private utilisateursService : UtilisateursService , private roleService : RoleService) { }

  ngOnInit(): void {
    this.utilisateursService.getListeUtilisateur().subscribe(
      data => {this.listeUtilisateur = data; 
      }
    )
    this.roleService.getListeRole().subscribe(
      data =>{this.listeRole = data;
    }
    )
  }
  deleteUtilisateur(idU : number){
    this.utilisateursService.deleteUtilisateur(idU).subscribe (
      data => {
        console.log(data);
        window.location.href='utilisateur/all'
      }
    )
  }
  updateUtilisateur(idU : number , utilisateur : Utilisateur){
    this.utilisateursService.updateU(idU,utilisateur).subscribe(
      data => {
        console.log(data);
        window.location.href='utilisateur/all'
      }
    )
  }

}
