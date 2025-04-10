import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gastronomie1',
  templateUrl: './gastronomie1.component.html',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  styleUrls: ['./gastronomie1.component.scss']
})
export class Gastronomie1Component {
  cartes = [
    {
      id: '3.1',
      image: '/assets/couscous.png',
      titre: 'Couscous',
      description: 'Le couscous est le plat traditionnel tunisien particulièrement pour les cérémonies. Il est préparé à base de semoule travaillée et cuite à la vapeur mais dont il est servi le plus souvent avec un ragoût de légumes pouvant être accompagné de viande rouge, blanche ou de poisson.',
      adresse: 'Au bon vieux temps,Restaurant Dar Slah,Fondouk El Attarine'
    },
    {
      id: '3.2',
      image: '/assets/lablebi.png',
      titre: 'Lablebi',
      description: 'est un plat populaire en Tunisie,préparé à base de pois chiches, d"ail, de cumin ou de carvi, d"huile d"olive, de sel, de poivre et de la harissa.',
      adresse: 'Mounir Lablebi,Labloub,Ayem Zamen'
    },
    {
      id: '3.3',
      image: '/assets/charmoula.png',
      titre: 'Charmoula',
      description: 'La Charmoula (ou Chermoula), est une sauce sucrée qui accompagne le poisson salé servi lors du premier repas de l"Aïd el Fitr.',
      adresse: 'Hlouwa,Maison Gourmandise,Boutique Maison Turki'
    }
  ];
}