import { Component, OnInit } from '@angular/core';
import { Tables } from '../models/tables';
import { Reservation } from '../models/reservation';
import { TablesService } from '../services/tables.service';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-liste-tables',
  templateUrl: './liste-tables.component.html',
  styleUrls: ['./liste-tables.component.css']
})
export class ListeTablesComponent implements OnInit {
listeTables : Tables [];
listeReservation : Reservation [];
  constructor(private tabService: TablesService, private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getListeReservation().subscribe(
      data => {
        this.listeReservation=data;
      }
    )
    this.tabService.getListeTable().subscribe(
      data => {
        this.listeTables=data;
      }
    )
  }
  deleteTable(idT : number){
    this.tabService.deleteTable(idT).subscribe (
      data => {
        console.log(data);
        window.location.href='tables/all'
      }
    )
  }

}
