import { Injectable } from '@angular/core';
import { Tables } from '../models/tables';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http: HttpClient) { }
  getListeTable(){
    return this.http.get<Tables[]>("http://localhost:8080/table/gettables").pipe();
      }
  createTable(table : Tables){
return this.http.post<Tables>("http://localhost:8080/table/addTable",table).pipe();
  }
  deleteTable(idT:number){
    return this.http.delete<Tables>("http://localhost:8080/table/deleteTable/"+idT).pipe();
  }
  findTable(idT:number){
    return this.http.get<Tables>("http://localhost:8080/table/findTable/"+idT).pipe();
  }
  updateTable(idT:number,table : Tables ){
    return this.http.post<Tables>("http://localhost:8080/table/updateTable/"+idT,table).pipe();
  }
}
