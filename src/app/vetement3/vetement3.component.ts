import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vetement3',
  templateUrl: './vetement3.component.html',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  styleUrls: ['./vetement3.component.scss']
})
export class Vetement3Component {
  cartes = [
    {
      id: '4.7',
      image: '/assets/akri hammamet.png',
      titre: 'Akri Hammamet',
      description: 'La Jebba Akri Hammamet XIXe siècle et début XXe siècle Costume de cérémonie de mariage Tunique de laine fine bicolore (Noire et Rouge)',
      adresse: 'Habits traditionnels by Nadia,Espace Nada Boudhina'
    },
    {
      id: '4.8',
      image: '/assets/safseri.png',
      titre: 'Safseri',
      description: 'est un voile traditionnel féminin,Il est en général de couleur crème en coton, satin ou soie',
      adresse: 'Hraier,Tej Alik,Artisana'
    },
    {
      id: '4.9',
      image: '/assets/balgha.png',
      titre: 'Balgha',
      description: 'est une chaussure en cuir qui fait partie des costumes traditionnels',
      adresse: 'artisansdart.tn ,Souk Blaghjia,artisana '
    }
  ];
}