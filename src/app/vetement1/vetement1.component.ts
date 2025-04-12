import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
@Component({
  selector: 'app-vetement1',
  templateUrl: './vetement1.component.html',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  styleUrls: ['./vetement1.component.scss']
})
export class Vetement1Component implements OnInit{adminMode = false;
  isRestaurationActive = false;
  isAdminPage = false;
  isRecherchePage = false;
  imgData = {
      imageSrc: '',
      text: 'Kachech'
    };
    cartes: Carte[] = [];
  
    nouvelleCarte: Carte = {
      imageUrl: '',
      titre: '',
      id: '',
      description: '',
      adresse: ''
    };
  
    constructor(private carteService: CarteService) {}
  
    ngOnInit() {
      this.loadCartes(); // recharge les cartes à l'initialisation
    }
  
    loadCartes() {
      const toutesLesCartes = this.carteService.getAllCartes();
  
      this.cartes = toutesLesCartes
        .filter((carte: Carte) => carte.id.startsWith('4.')) // typage explicite
        .map((carte: Carte) => ({ ...carte })); // copie conforme
    }
  
    ajouterCarte() {
      const idNumber = parseFloat(this.nouvelleCarte.id.split('.')[4]);
  
      if (this.nouvelleCarte.id.startsWith('4.') ) {
        this.carteService.addCarte({ ...this.nouvelleCarte }); // copie pour éviter mutation
        this.loadCartes(); // mise à jour de la liste affichée
        this.nouvelleCarte = {
          imageUrl: '',
          titre: '',
          id: '',
          description: '',
          adresse: ''
        };
      } else {
        alert("L'ID doit être 4.x");
      }
    }
  }
  