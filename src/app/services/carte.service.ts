import { Injectable } from '@angular/core';
import { Carte } from '../models/carte.interface';  // Assure-toi que le chemin est correct
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  // Cela permet au service d'être injecté dans n'importe quel composant sans avoir à l'ajouter dans les imports du module
})
export class CarteService {
  private cartes:Carte[] = [
    // Cartes patrimoine (id commençant par 1.x)
    { id: '1.1', titre: 'Musée de Sbeitla', description: 'Ruines romaines impressionnantes avec trois temples capitolins.', adresse: 'Sbeitla, Gouvernorat de Kasserine', imageUrl: '/assets/sbeitla.jpg' },
    { id: '1.2', titre: 'Gightis', description: 'Ancienne cité romaine avec thermes, temples et habitations.', adresse: 'Près de Boughrara, Gouvernorat de Médenine', imageUrl: '/assets/gightis.jpg' },
    { id: '1.3', titre: 'Ain Kanassira', description: 'Située à environ 1h30 de Tunis, cette source d\'eau chaude à 44°C est nichée entre mer et montagne, offrant un cadre unique pour le camping.', adresse: 'Ain Kanassira, près de Korbous, Gouvernorat de Nabeul.', imageUrl: '/assets/ain_kan.jpg' },
    
    { id: '1.4', titre: 'Kerkouane', description: 'Situé sur le Cap Bon, ce musée présente les vestiges de la cité punique de Kerkouane, offrant un aperçu unique de l\'urbanisme et de l\'architecture puniques.', adresse: 'Kerkouane, Gouvernorat de Nabeul', imageUrl: '/assets/kerkouane.webp' },
    { id: '1.5', titre: 'Thuburbo Majus', description: 'Proche de l\'actuelle ville d\'El Fahs, ce site offre des vestiges bien conservés d\'une ancienne cité romaine, notamment des temples, des thermes et des mosaïques.', adresse: 'El Fahs, Gouvernorat de Zaghouan', imageUrl: '/assets/Thuburbo-Majus.jpg' },
    { id: '1.6', titre: 'Dougga', description: 'Ancienne cité romaine bien préservée avec un théâtre, un capitole et des thermes.', adresse: 'Teboursouk, Gouvernorat de Béja', imageUrl: '/assets/dougga.webp' },


    { id: '1.7', titre: 'Dunes Insolites', description: 'Ce campement propose une expérience de camping insolite au milieu des dunes, offrant une vue panoramique sur le désert.', adresse: 'Nefta, Gouvernorat de Tozeur.', imageUrl: '/assets/dunes.jpg' },
    { id: '1.8', titre: 'Cap Serrat', description: 'Situé dans le nord-ouest de la Tunisie, Cap Serrat est l\'une des parties les plus appréciées du littoral de Bizerte, offrant des plages sauvages et des paysages pittoresques.', adresse: 'Cap Serrat, Gouvernorat de Bizerte.', imageUrl: '/assets/caps.jpg' },
    { id: '1.9', titre: 'Galite', description: 'Cet archipel rocheux offre un cadre idyllique pour les campeurs en quête de tranquillité et de paysages marins préservés.', adresse: 'Archipel de La Galite, Tabarka, Gouvernorat de Jendouba.', imageUrl: '/assets/galite.jpg' },
  
    // Cartes restauration (id commençant par 2.x)
    { id: '2.1', titre: 'Dar Jeld', description: 'Dar Jeld est un Palais Historique construit en 1800, situé dans la médina de Tunis. Il est un exemple de l\'architecture tunisienne traditionnelle et ottomane.', adresse: 'Dar El Jeld', imageUrl: '/assets/darjeld.jpg' },
    { id: '2.2', titre: 'El Ali', description: 'El Ali est un restaurant traditionnel tunisien situé dans le coeur de la médina de Tunis. Il est célèbre pour son ambiance authentique et son décor inspiré des maisons traditionnelles tunisiennes.', adresse: 'EL ALI Resto & Café Culturel', imageUrl: '/assets/Elali.jpg' },
    { id: '2.3', titre: 'Dar Zyne', description: 'Dar Zyne est une maison traditionnelle tunisienne située dans la médina de Tunis. Ce lieu historique au décor raffiné mélange harmonieusement l\'architecture ancienne avec des éléments modernes.', adresse: 'Dar Zyne la Médina', imageUrl: '/assets/patio.jpg' },

    { id: '2.4', titre: 'El Walima', description: 'El Walima, géré par la petite fille du bey de Tunisie, est un endroit exceptionnel. Les plats sont très bons et raffinés, avec un accueil chaleureux.', adresse: 'El Walima Bent El Bey', imageUrl: '/assets/walima.jpg' },
    { id: '2.5', titre: 'Mabrouk Chinini', description: 'Le Restaurant Mabrouk Tataouine est situé à moins de 16 minutes à pied d\'Oued Tataouine. Il offre une cuisine locale authentique et un cadre typique pour déguster des plats traditionnels tunisiens.', adresse: 'Mabrouk Restaurant, Chinini', imageUrl: '/assets/mabrouk.webp' },
    { id: '2.6', titre: 'Chef Fatma', description: 'Situé dans une maison décorée de manière traditionnelle, ce restaurant offre une expérience culinaire authentique avec des plats tunisiens faits maison.', adresse: 'Restaurant Chef Fatma', imageUrl: '/assets/chef.jpg' },

    { id: '2.7', titre: 'El Foundouk Djerba', description: 'C\'est un caravansérail âgé de plus de 300 ans. Après 18 mois de rénovation, ce lieu de vie ouvre ses portes à tous. Le patio est un endroit où le design est inspiré d\'une atmosphère typiquement tunisienne.', adresse: 'Fondouk Jomni, Rue Moncef Bey, Houmt Souk, Djerba Island 4180 Tunisie', imageUrl: '/assets/djerba.jpg' },
    { id: '2.8', titre: 'Sidi Bouhdid', description: 'Café Sidi Bouhdid est classé parmi les meilleurs au monde, réputé pour sa luminosité unique qu’offre le golfe d’Hammamet.', adresse: 'La Médina Arabe, Café Sidi Bouhdid', imageUrl: '/assets/sidi.jpg' },
    { id: '2.9', titre: 'Khottab El Beb', description: 'Ce café a plus de 500 ans et mérite une visite. Superbe avec ses voûtes, c\'est un ancien foyer pour les élèves de la Mosquée Zitouna, devenu caravansérail.', adresse: 'Café Souk', imageUrl: '/assets/souk.jpg' }
  
  ];


  constructor() {}

  // Méthode pour obtenir une carte par son ID
  getCarteById(id: string): Carte | null {
    return this.cartes.find(carte => carte.id === id) || null;
  }

  // Méthode pour ajouter une carte
  addCarte(carte: Carte): void {
    this.cartes.push(carte);
  }

  // Méthode pour modifier une carte existante
  updateCarte(modifiedCarte: Carte): boolean {
    const index = this.cartes.findIndex(c => c.id === modifiedCarte.id);
    if (index !== -1) {
      this.cartes[index] = { ...modifiedCarte }; // applique bien les changements
      return true;
    }
    return false;
  }
  
  // Méthode pour supprimer une carte
  deleteCarte(id: string): void {
    const index = this.cartes.findIndex(carte => carte.id === id);
    if (index !== -1) {
      this.cartes.splice(index, 1);
    }
  }
  getAllCartes(): Carte[] {
    return this.cartes;
  }

  getCartesPatrimoine(): Carte[] {
    return this.cartes.filter(carte => carte.id.startsWith('1.'));
  }

  getCartesRestauration(): Carte[] {
    return this.cartes.filter(carte => carte.id.startsWith('2.'));
  }

  filterCartes(searchTerm: string, cartes: Carte[]): Carte[] {
    if (!searchTerm) return cartes;
    return cartes.filter(carte =>
      carte.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      carte.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  
}