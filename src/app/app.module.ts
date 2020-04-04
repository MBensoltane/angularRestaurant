import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { ListeRolesComponent } from './liste-roles/liste-roles.component';
import { MenuComponent } from './menu/menu.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ListeTablesComponent } from './liste-tables/liste-tables.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { ListeLigneCommandesComponent } from './liste-ligne-commandes/liste-ligne-commandes.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { CreateUtlisateurComponent } from './create-utlisateur/create-utlisateur.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { CreateLigneCommandeComponent } from './create-ligne-commande/create-ligne-commande.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListeUtilisateursComponent,
    ListeRolesComponent,
    MenuComponent,
    ListeReservationComponent,
    ListeTablesComponent,
    ListeCommandesComponent,
    ListeLigneCommandesComponent,
    ListeArticlesComponent,
    ListeFacturesComponent,
    CreateUtlisateurComponent,
    CreateRoleComponent,
    CreateReservationComponent,
    CreateCommandeComponent,
    CreateFactureComponent,
    CreateLigneCommandeComponent,
    CreateArticleComponent,
    DetailCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
