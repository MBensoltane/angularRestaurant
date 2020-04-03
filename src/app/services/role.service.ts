import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http : HttpClient) { }
  getListeRole(){
    return this.http.get<Role[]>("http://localhost:8080/Role/getRoles").pipe();
  }
  createRole(role : Role){
return this.http.post<Role>("http://localhost:8080/Role/addRole",role).pipe();
  }
  deleteRole(idRole:number){
    return this.http.delete<Role>("http://localhost:8080/Role/deleteRole/"+idRole).pipe();
  }
  findRole(idRole:number){
    return this.http.get<Role>("http://localhost:8080/Role/findRole/"+idRole).pipe();
  }
  updateRole(idRole:number,role : Role ){
    return this.http.post<Role>("http://localhost:8080/Role/updateRo/"+idRole,role).pipe();
  }
}
