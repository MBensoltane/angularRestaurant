import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-liste-roles',
  templateUrl: './liste-roles.component.html',
  styleUrls: ['./liste-roles.component.css']
})
export class ListeRolesComponent implements OnInit {
listeRole : Role[];
  constructor(private rService : RoleService) { }

  ngOnInit(): void {
    this.rService.getListeRole().subscribe(
      data =>{
        this.listeRole=data; 
      }
    )
  }
  deleteRole(idRole : number){
    this.rService.deleteRole(idRole).subscribe (
      data => {
        console.log(data);
        window.location.href='role/all'
      }
    )
  }
  updateRole(idRole : number, role : Role){
    this.rService.updateRole(idRole,role ).subscribe (
      data => {
        console.log(data);
        window.location.href='role/all'
      }
    )
  }
}
