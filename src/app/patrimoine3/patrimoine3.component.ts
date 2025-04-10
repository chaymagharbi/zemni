import { Component, OnInit } from '@angular/core';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { CarteService } from '../services/carte.service';
import { Carte } from '../models/carte.interface';

@Component({
  selector: 'app-patrimoine3',
  standalone: true,
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent],
  templateUrl: './patrimoine3.component.html',
  styleUrls: ['./patrimoine3.component.scss']
})
export class Patrimoine3Component implements OnInit {
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
      .filter((carte: Carte) => carte.id.startsWith('1.')) // typage explicite
      .map((carte: Carte) => ({ ...carte })); // copie conforme
  }

  ajouterCarte() {
    const idNumber = parseFloat(this.nouvelleCarte.id.split('.')[1]);

    if (this.nouvelleCarte.id.startsWith('1.') && idNumber > 6) {
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
      alert("L'ID doit être supérieur à 1.6");
    }
  }
}
