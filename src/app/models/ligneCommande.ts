import { Articles } from './articles';
import { Commande } from './commande';

export class LigneCommande{
    idLC: number;
        article: Articles;
        quantite: number;
    commande : Commande;  
}