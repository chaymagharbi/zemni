import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vetement2',
  templateUrl: './vetement2.component.html',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  styleUrls: ['./vetement2.component.scss']
})
export class Vetement2Component {
  cartes = [
    {
      id : '4.4',
      image: '/assets/robe djerbienne.png',
      titre: 'Robe Djerbienne',
      description: 'Costume de la mariée d"Ajim.Robe-drapé de soie rayé',
      adresse: 'Abir mode vente et location , Boutique La Perla Caftan Houmt Souk'
    },
    {
      id : '4.5',
      image: '/assets/jebba.png',
      titre: 'Jebba',
      description: 'La jebba est un vêtement ample qui constitue la pièce principale de la tenue traditionnelle masculine en Tunisie ,fabriqué en laine, mais aussi en soie ou en lin',
      adresse: 'L"homme by Gharsallah,Pacha Collection'
    },
    {
      id : '4.6',
      image: '/assets/qmejja mestiri.png',
      titre: 'Qmeja Mestiri ',
      description: 'Qmejja mestiri Ouardanine Costume de la jelwa (Cérémonie de mariage) à grandes ailes Velours et brocart richement brodés ',
      adresse: 'Trésor,Location vetements traditionnels'
    }
  ];
}