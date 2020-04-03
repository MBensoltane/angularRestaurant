import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  getListeCommandes(){
    return this.http.get<Commande[]>("http://localhost:8080/Commande/getCommandes").pipe();
  }
  createCommande(commande : Commande){
return this.http.post<Commande>("http://localhost:8080/Commande/addCommande",commande).pipe();
  }
  deleteCommande(idCommande:number){
    return this.http.delete<Commande>("http://localhost:8080/Commande/deleteCommande/"+idCommande).pipe();
  }
  findCommande(idCommande:number){
    return this.http.get<Commande>("http://localhost:8080/Commande/findCommande/"+idCommande).pipe();
  }
  updateCommande(idCommande:number,commande : Commande ){
    return this.http.post<Commande>("http://localhost:8080/Commande/updateCommande/"+idCommande,commande).pipe();
  }
}
