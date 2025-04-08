import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { CarteService } from '../services/carte.service';
@Component({
  selector: 'app-restoration2',
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent],
  standalone: true,
  templateUrl: './restoration2.component.html',
  styleUrl: './restoration2.component.scss'
})
export class Restoration2Component {
  cartes = [
    {
      image: '/assets/walima.jpg',
      titre: 'El Walima',
      description: 'El Walima Géré par la petite fille du bey de Tunisie est un endroit exceptionnel les plats sont très bons et très raffiné l\'acceuil par madame salwa et son mari', 
      adresse: 'El Walima Bent El Bey',
      id:'2.4',
    },
    {
      image: '/assets/mabrouk.webp',
      titre: 'Mabrouk Chinini',
      description: ' Restaurant Mabrouk Tataouine est situé à moins de 16 minutes à pied d\'Oued Tataouine a chinini qui est une village berbère du sud de tunisie.Il offre une cuisine locale authentique et un cadre typique pour déguster des plats traditionnels tunisiens avec une vue imprenable sur les montagnes.',
      adresse: 'Mabrouk Restaurant, Chinini',
      id:'2.5',
    },
    {
      image: '/assets/chef.jpg',
      titre: 'Chef Fatma',
      description: ' Situé dans une maisoon décorée de manière traditionnelle ,ce restaurant offre une expérience cuilinaire authentique avec des plats tunisiens faits maison.',    
      adresse: 'Restaurant Chef Fatma',
      id:'2.6',}

    ];
    
}
