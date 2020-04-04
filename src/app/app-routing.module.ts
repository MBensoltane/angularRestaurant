import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListeRolesComponent } from './liste-roles/liste-roles.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { ListeLigneCommandesComponent } from './liste-ligne-commandes/liste-ligne-commandes.component';
import { ListeFacturesComponent } from './liste-factures/liste-factures.component';
import { ListeTablesComponent } from './liste-tables/liste-tables.component';
import { CreateUtlisateurComponent } from './create-utlisateur/create-utlisateur.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/acceuil', pathMatch:'full',
  },
  {
    path :"acceuil",
    component : AcceuilComponent
  },
  {
    path : "role/all",
    component : ListeRolesComponent
  },
  {
    path : "utilisateur/all",
    component : ListeUtilisateursComponent
  },
  {
    path : "reservation/all",
    component : ListeReservationComponent
  }, 
  {
    path : "article/all",
    component : ListeArticlesComponent
  }, 
  {
    path : "commande/all",
    component : ListeCommandesComponent
  }, 
  {
    path : 'lignecommande/all',
    component : ListeLigneCommandesComponent
  },
  {
    path : 'facture/all',
    component : ListeFacturesComponent
  },
  {
    path : 'tables/all',
    component : ListeTablesComponent
  },
  {
    path : 'utlisateur/addU',
    component : CreateUtlisateurComponent
  },
  {
    path : 'role/addRole',
    component : CreateRoleComponent
  },
  {
    path : 'reservation/addreservation',
    component : CreateReservationComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
