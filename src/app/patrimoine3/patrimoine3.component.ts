import { Component } from '@angular/core';
import { ImgprComponent } from '../imgpr/imgpr.component';  // Importer ImgprComponent
import { NavbarComponent } from '../navbar/navbar.component';  // Importer NavbarComponent
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-patrimoine3',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  templateUrl: './patrimoine3.component.html',
  standalone: true,
  styleUrls: ['./patrimoine3.component.scss']
})
export class Patrimoine3Component {
  cartes = [
    {
      image: '/assets/dunes.jpg',
      titre: 'Dunes Insolites',
      id:1.7,
      description: 'Ce campement propose une expérience de camping insolite au milieu des dunes, offrant une vue panoramique sur le désert.',
      adresse: 'Nefta, Gouvernorat de Tozeur.'
    },
    {
      image: '/assets/caps.jpg',
      titre: 'Cap Serrat',
      id:1.8,
      description: 'Situé dans le nord-ouest de la Tunisie, Cap Serrat est l une des parties les plus appréciées du littoral de Bizerte, offrant des plages sauvages et des paysages pittoresques.',
      adresse: 'cap Serrat, Gouvernorat de Bizerte.'
    },
    {
      image: '/assets/galite.jpg',
      titre: 'Galite',
      id:1.9,
      description: 'Cet archipel rocheux offre un cadre idyllique pour les campeurs en quête de tranquillité et de paysages marins préservés.',
      adresse: 'Archipel de La Galite,Tabarka, Gouvernorat de Jendouba'
    }
  ];
  
}