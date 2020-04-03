import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private http: HttpClient) { }
  getListeUtilisateur(){
    return this.http.get<Utilisateur[]>("http://localhost:8080/utilisateur/allUtilisateurs").pipe();
  }
  createUtilisateur(utilisateur : Utilisateur){
return this.http.post<Utilisateur>("http://localhost:8080/utilisateur/addU",utilisateur).pipe();
  }
  deleteUtilisateur(idU:number){
    return this.http.delete<Utilisateur>("http://localhost:8080/utilisateur/deleteU/"+idU).pipe();
  }
  findU(idU:number){
    return this.http.get<Utilisateur>("http://localhost:8080/utilisateur/findU/"+idU).pipe();
  }
  updateU(idU:number,utilisateur : Utilisateur ){
    return this.http.post<Utilisateur>("http://localhost:8080/Role/updateRo/"+idU,utilisateur).pipe();
  }
}
