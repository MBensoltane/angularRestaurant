import { Utilisateur } from './utilisateur';

export class Reservation{
   "idR": number;
   "dateR": Date;
  "heureR": number;
"nbrePersonne": number;
"client": Utilisateur;
"serveur":Utilisateur;
"utilisateurManager":Utilisateur;
}