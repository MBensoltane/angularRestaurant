import { Component, OnInit } from '@angular/core';
import { Role } from '../models/role';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
 
  newRole : Role = new Role();
  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
  }
createRole(){
  this.roleService.createRole(this.newRole).subscribe(
    data=>{
       console.log(data)
        console.log("ajout de role reussi")
    }
  )
}
}
