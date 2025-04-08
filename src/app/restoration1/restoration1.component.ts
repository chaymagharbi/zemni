import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-restoration1',
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent],
  standalone: true,
  templateUrl: './restoration1.component.html',
  styleUrl: './restoration1.component.scss'
})
export class Restoration1Component {
  cartes = [
    {
      image: '/assets/darjeld.jpg',
      titre: 'Dar Jeld',
      description: 'Dar Jeld est un Palaris Historique construit en 1800, situé dans la médina de Tunis. IL est un exemple de l\'architecture tunisienne traditionnelle et ottomane.', 
      adresse: 'Dar El Jeld',
      id:2.1,
    },
    {
      image: '/assets/Elali.jpg',
      titre: 'El Ali',
      description: 'El Ali est un restaurant traditionnel tunisien situé dans le coeur de la médina de Tunis. Il est célèbre pour son ambiance authentique et son décor inspiré des maisons traditionnelles tunisiennes.Il se distingue par spn service impeccable et son cadre historique.',
      adresse: 'EL ALI Resto & Café Culturel',
      id:2.2,
    },
    {
      image: '/assets/patio.jpg',
      titre: 'Dar Zyne',
      description: 'Dar Zyne est une maison traditionnelle tunisienne située dans la médina de Tunis. Ce lieu historique au decor raffiné mélange harmonieusement l\'architecture ancienne avec des éléments modernes ',    
      adresse: 'Dar Zyne la Médina',
      id:2.3,}

    ];

}

