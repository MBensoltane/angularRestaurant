import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }
  getListeFacture(){
    return this.http.get<Facture[]>("http://localhost:8080/Facture/getFactures").pipe();
      }
  createLc(f : Facture){
return this.http.post<Facture>("http://localhost:8080/Facture/addFacture",f).pipe();
  }
  
  findLc(f : Facture){
    return this.http.get<Facture>("http://localhost:8080/Facture/findFacture/"+f).pipe();
  }
 
}
