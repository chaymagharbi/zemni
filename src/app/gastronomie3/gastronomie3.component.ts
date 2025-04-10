import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gastronomie3',
  templateUrl: './gastronomie3.component.html',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  styleUrls: ['./gastronomie3.component.scss']
})
export class Gastronomie3Component {
  cartes = [
    {
      id: '3.7',
      image: '/assets/kaak warka.png',
      titre: 'Kaak Warka',
      description: 'Le kâak warka est une pâtisserie tunisienne à base de farine, de sucre glace, de beurre et d"amandes en poudre auquel peut être ajouté de l"eau florale',
      adresse: 'Patisserie Mme Sakka,Patisserie Masmoudi'
    },
    {
      id: '3.8',
      image: '/assets/ourta.png',
      titre: 'Ourta',
      description: 'Ourta, un gâteau tunisien aux feuilles de brik et fruits secs. Une douceur ramadanesque.',
      adresse: 'Maison Hachicha,Gourmandise'
    },
    {
      id: '3.9',
      image: '/assets/mahkouka.png',
      titre: 'Mahkouka',
      description:'est une patisserie tunisienne constituée principalement de dattes,de semoule et de fruits secs.',
      adresse: 'Maison Hachicha ,Madame Najet'
    }
  ];
}
