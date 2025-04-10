import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gastronomie2',
  templateUrl: './gastronomie2.component.html',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  styleUrls: ['./gastronomie2.component.scss']
})
export class Gastronomie2Component {
  cartes = [
    {
      id: '3.4',
      image: '/assets/kafteji.png',
      titre: 'Kafteji',
      description: ' est un plat populaire en Tunisie, Le kafteji est un plat composé principalement de légumes et il est épicé et pimenté,le plat est traditionnellement accompagné de foie ou de merguez grillées ou encore d"un œuf frit.',
      adresse: 'Restaurant Tounsi,Kafteji Choko,Kafteji&Mraweb chez Haboub'
    },
    {
      id: '3.5',
      image: '/assets/kamounia.png',
      titre: 'Kamounia',
      description: ' La Kamounia est l’une des plats les plus raffinés de la gastronomie tunisienne.Il s"agit d"un plat en sauce,préparé à base d"abats ou de fruits de mer .',
      adresse: 'Resto Lella Fatma,El foundou,Dar El jeld'
    },
    {
      id: '3.6',
      image: '/assets/madfouna.png',
      titre: 'Madfouna',
      description: 'La madfouna, un pain plat fourré composé d"une grande variété de viandes, de noix, de légumes, d"herbes et d"épices',
      adresse: 'Bnina.tn,Madfouna.tn'
    }
  ];
}
