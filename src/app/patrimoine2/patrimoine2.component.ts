import { Component } from '@angular/core';
import { ImgprComponent } from '../imgpr/imgpr.component';  // Importer ImgprComponent
import { NavbarComponent } from '../navbar/navbar.component';  // Importer NavbarComponent
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-patrimoine2',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  templateUrl: './patrimoine2.component.html',
  styleUrl: './patrimoine2.component.scss'
})
export class Patrimoine2Component {
  imgData = {
    imageSrc: '/assets/vert.jpg',
    text: 'naarjalek dima'
  };
  cartes = [
    {
      image: '/assets/kerkouane.webp',
      titre: 'Kerkouane',
      id:'1.4',
      description: 'Situé sur le Cap Bon, ce musée présente les vestiges de la cité punique de Kerkouane, offrant un aperçu unique de l urbanisme et de l architecture puniques.',
      adresse: 'Kerkouane, Gouvernorat de Nabeul'
    },
    {
      image: '/assets/Thuburbo-Majus.jpg',
      titre: 'Thuburbo Majus',
      id:'1.5',
      description: ' Proche de l actuelle ville d El Fahs, ce site offre des vestiges bien conservés d une ancienne cité romaine, notamment des temples, des thermes et des mosaïques',
      adresse: 'El Fahs, Gouvernorat de Zaghouan'
    },
    {
      image: '/assets/dougga.webp',
      titre: 'Dougga',
      id:'1.6',
      description: ' Ancienne cité romaine bien préservée avec un théâtre, un capitole et des thermes',
      adresse: 'Teboursouk, Gouvernorat de Béja'
    }
  ];
  
}