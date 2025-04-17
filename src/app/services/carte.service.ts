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
    { id: '1.2', titre: 'Gightis', description: 'Ancienne cité romaine avec thermes, temples et habitations.', adresse: 'Près de Boughrara, Gouvernorat de Médenine', imageUrl: '/assets/gig.jpg' },
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
    { id: '2.9', titre: 'Khottab El Beb', description: 'Ce café a plus de 500 ans et mérite une visite. Superbe avec ses voûtes, c\'est un ancien foyer pour les élèves de la Mosquée Zitouna, devenu caravansérail.', adresse: 'Café Souk', imageUrl: '/assets/souk.jpg' },
    //cartes gastronomie (id commence par 3.x)
    {id: '3.1',imageUrl: '/assets/kosksi.jpg',titre: 'Couscous',description: 'Le couscous est le plat traditionnel tunisien particulièrement pour les cérémonies. Il est préparé à base de semoule travaillée et cuite à la vapeur mais dont il est servi le plus souvent avec un ragoût de légumes pouvant être accompagné de viande rouge, blanche ou de poisson.',adresse: 'Au bon vieux temps,Restaurant Dar Slah,Fondouk El Attarine',intervallePrix:'8-30 TND'},
    {id: '3.2',imageUrl: '/assets/leblebii.jpg',intervallePrix:'4-12 TND',titre: 'Lablebi',description: 'est un plat populaire en Tunisie,préparé à base de pois chiches, d"ail, de cumin ou de carvi, d"huile d"olive, de sel, de poivre et de la harissa.',adresse: 'Mounir Lablebi,Labloub,Ayem Zamen'},
    {id: '3.3',imageUrl: '/assets/charmoula.png',intervallePrix:'8-40 TND',titre: 'Charmoula',description: 'La Charmoula (ou Chermoula), est une sauce sucrée qui accompagne le poisson salé servi lors du premier repas de l"Aïd el Fitr.',adresse: 'Hlouwa,Maison Gourmandise,Boutique Maison Turki'},

    {id: '3.4',imageUrl: '/assets/kafteji.jpg',intervallePrix:'8-12 TND',titre: 'Kafteji',description: ' est un plat populaire en Tunisie, Le kafteji est un plat composé principalement de légumes et il est épicé et pimenté,le plat est traditionnellement accompagné de foie ou de merguez grillées ou encore d"un œuf frit.',adresse: 'Restaurant Tounsi,Kafteji Choko,Kafteji&Mraweb chez Haboub'},
    {id: '3.5',imageUrl: '/assets/kamouniaa.jpg',intervallePrix:'5-13 TND',titre: 'Kamounia',description: ' La Kamounia est l’une des plats les plus raffinés de la gastronomie tunisienne.Il s"agit d"un plat en sauce,préparé à base d"abats ou de fruits de mer .',adresse: 'Resto Lella Fatma,El foundou,Dar El jeld'},
    {id: '3.6',imageUrl: '/assets/madfouna.png',intervallePrix:'4-14 TND',titre: 'Madfouna',description: 'La madfouna, un pain plat fourré composé d"une grande variété de viandes, de noix, de légumes, d"herbes et d"épices',adresse: 'Bnina.tn,Madfouna.tn'},
    
    {id: '3.7',imageUrl: '/assets/kaak.jpg',intervallePrix:'30-50 TND',titre: 'Kaak Warka',description: 'Le kâak warka est une pâtisserie tunisienne à base de farine, de sucre glace, de beurre et d"amandes en poudre auquel peut être ajouté de l"eau florale',adresse: 'Patisserie Mme Sakka,Patisserie Masmoudi'},
    {id: '3.8',imageUrl: '/assets/ourta.png',intervallePrix:'5-40 TND',titre: 'Ourta',description: 'Ourta, un gâteau tunisien aux feuilles de brik et fruits secs. Une douceur ramadanesque.',adresse: 'Maison Hachicha,Gourmandise'},
    {id: '3.9',imageUrl: '/assets/mahkouka.png',intervallePrix:'15-30 TND',titre: 'Mahkouka',description:'est une patisserie tunisienne constituée principalement de dattes,de semoule et de fruits secs.',adresse: 'Maison Hachicha ,Madame Najet'},
  
    // cartes vetement (id commence par 4.x)
    {id: '4.1',imageUrl: '/assets/barnouss.jpg',intervallePrix:'50-500 TND',titre: 'Burnous',description: 'Le burnous, une pièce maîtresse de la culture tunisienne, est ici revisité pour s"adapter aux goûts modernes',adresse: 'Dar El Jebba Sellami Artisanat, JAS & JOES,Bluz Tunisie'},
    {id: '4.2',imageUrl: '/assets/houlii.jpg',intervallePrix:'80-200 TND',titre: 'Houli',description: 'un vetement traditionnel féminin,souvent porté lors de mariages et d"occasions spéciales. Il se compose d"une robe longue et fluide,en soie ou en satin, ornée de broderies et de perles',adresse: 'Houli Saoud,Tunisian Dress by saloua, Artounsi'},
    {id: '4.3',imageUrl: '/assets/chachiyya.avif',intervallePrix:'10-200 TND',titre: 'Chachia',description: 'La chéchia traditionnelle est faite de laine peignée et tricotée. Elle est naturellement dotée d"une texture souple',adresse: 'Souk Chaouachin,Artisans d"Art,Chechia Store'},

    {id : '4.4',imageUrl: '/assets/robe djerbienne.png',intervallePrix:'50-300 TND',titre: 'Robe Djerbienne',description: 'Costume de la mariée d"Ajim.Robe-drapé de soie rayé',adresse: 'Abir mode vente et location , Boutique La Perla Caftan Houmt Souk'},
    {id : '4.5',imageUrl: '/assets/jebbaa.jpg',intervallePrix:'100-600 TND',titre: 'Jebba',description: 'La jebba est un vêtement ample qui constitue la pièce principale de la tenue traditionnelle masculine en Tunisie ,fabriqué en laine, mais aussi en soie ou en lin',adresse: 'L"homme by Gharsallah,Pacha Collection'},
    {id : '4.6',imageUrl: '/assets/qmejja mestiri.png',titre: 'Qmeja Mestiri ',intervallePrix:'30-200 TND',description: 'Qmejja mestiri Ouardanine Costume de la jelwa (Cérémonie de mariage) à grandes ailes Velours et brocart richement brodés ',adresse: 'Trésor,Location vetements traditionnels'},

    {id: '4.7',imageUrl: '/assets/akri.jpg',titre: 'Akri Hammamet',intervallePrix:'40-300 TND',description: 'La Jebba Akri Hammamet XIXe siècle et début XXe siècle Costume de cérémonie de mariage Tunique de laine fine bicolore (Noire et Rouge)',adresse: 'Habits traditionnels by Nadia,Espace Nada Boudhina'},
    {id: '4.8',imageUrl: '/assets/sefserii.jpg',titre: 'Safseri',intervallePrix:'50-400 TND',description: 'est un voile traditionnel féminin,Il est en général de couleur crème en coton, satin ou soie',adresse: 'Hraier,Tej Alik,Artisana'},
    {id: '4.9',imageUrl: '/assets/balghaa.jpg',titre: 'Balgha',intervallePrix:'40-250 TND',description: 'est une chaussure en cuir qui fait partie des costumes traditionnels',adresse: 'artisansdart.tn ,Souk Blaghjia,artisana '}
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
  getCartesGastronomie(): Carte[] {
    return this.cartes.filter(carte => carte.id.startsWith('3.'));
  }

  getCartesVetement(): Carte[] {
    return this.cartes.filter(carte => carte.id.startsWith('4.'));
  }

  filterCartes(searchTerm: string, cartes: Carte[]): Carte[] {
    if (!searchTerm) return cartes;
    return cartes.filter(carte =>
      carte.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      carte.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  
}