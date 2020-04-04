import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { Role } from '../models/role';
import { UtilisateursService } from '../services/utilisateurs.service';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-create-utlisateur',
  templateUrl: './create-utlisateur.component.html',
  styleUrls: ['./create-utlisateur.component.css']
})
export class CreateUtlisateurComponent implements OnInit {
newU : Utilisateur = new Utilisateur();
ListeRole : Role[];
  constructor(private utlisateurService : UtilisateursService, private roleService : RoleService) { }

  ngOnInit(): void {
    this.roleService.getListeRole().subscribe(
      data => {
        this.ListeRole=data;
      }
    )
  }

createUtilisateur () {
  this.utlisateurService.createUtilisateur(this.newU).subscribe(
    data => { console.log(data)
      console.log("ajout reussi")

    }
  )
}
}
