import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vetement1',
  templateUrl: './vetement1.component.html',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  styleUrls: ['./vetement1.component.scss']
})
export class Vetement1Component {
  cartes = [
    {
      id: '4.1',
      image: '/assets/burnous.png',
      titre: 'Burnous',
      description: 'Le burnous, une pièce maîtresse de la culture tunisienne, est ici revisité pour s"adapter aux goûts modernes',
      adresse: 'Dar El Jebba Sellami Artisanat, JAS & JOES,Bluz Tunisie'
    },
    {
      id: '4.2',
      image: '/assets/houli.png',
      titre: 'Houli',
      description: 'un vetement traditionnel féminin,souvent porté lors de mariages et d"occasions spéciales. Il se compose d"une robe longue et fluide,en soie ou en satin, ornée de broderies et de perles',
      adresse: 'Houli Saoud,Tunisian Dress by saloua, Artounsi'
    },
    {
      id: '4.3',
      image: '/assets/shashya.png',
      titre: 'Chachia',
      description: 'La chéchia traditionnelle est faite de laine peignée et tricotée. Elle est naturellement dotée d"une texture souple',
      adresse: 'Souk Chaouachin,Artisans d"Art,Chechia Store'
    }
  ];
}
