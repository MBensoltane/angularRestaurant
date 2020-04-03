import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LigneCommande } from '../models/ligneCommande';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  constructor(private http:HttpClient) { }
  getListeLC(){
    return this.http.get<LigneCommande[]>("http://localhost:8080/Lc/getLC").pipe();
      }
  createLc(Lc : LigneCommande){
return this.http.post<LigneCommande>("http://localhost:8080/Lc/addLC",Lc).pipe();
  }
  deleteLc(idLC:number){
    return this.http.delete<LigneCommande>("http://localhost:8080/Lc/deleteLC/"+idLC).pipe();
  }
  findLc(idLC:number){
    return this.http.get<LigneCommande>("http://localhost:8080/Lc/findLC/"+idLC).pipe();
  }
  updateLc(idLC:number,Lc : LigneCommande ){
    return this.http.post<LigneCommande>("http://localhost:8080/Lc/updateLC/"+idLC,Lc).pipe();
  }
}
