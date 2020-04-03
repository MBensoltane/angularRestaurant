import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articles } from '../models/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http : HttpClient) { }
  getListeArticles(){
    return this.http.get<Articles[]>("http://localhost:8080/Articles/getArticles").pipe();
  }
  createArticle(article : Articles){
return this.http.post<Articles>("http://localhost:8080/Articles/addArticle",article).pipe();
  }
  deleteArticle(idArticle:number){
    return this.http.delete<Articles>("http://localhost:8080/Articles/deleteArticle/"+idArticle).pipe();
  }
  findArticle(idArticle:number){
    return this.http.get<Articles>("http://localhost:8080/Articles/findArticle/"+idArticle).pipe();
  }
  updateArticle(idArticle:number,article : Articles){
    return this.http.post<Articles>("http://localhost:8080/Articles/updateArticle/"+idArticle,article).pipe();
  }
}
