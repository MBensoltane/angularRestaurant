import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Articles } from '../models/articles';
import { ArticlesService } from '../services/articles.service';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
  listeArticles : Articles[];
  listeReservation : Reservation[];
  constructor(private artService : ArticlesService, private reservationService : ReservationService) { }

  ngOnInit(): void {
    this.artService.getListeArticles().subscribe(
      data => {
        this.listeArticles=data;
      }
    )

    this.reservationService.getListeReservation().subscribe(
      data => {
        this.listeReservation=data;
      }
    )
  }

  deleteArticle(idArticle : number){
    this.artService.deleteArticle(idArticle).subscribe (
      data => {
        console.log(data);
        window.location.href='article/all'
      }
    )
  }

}
