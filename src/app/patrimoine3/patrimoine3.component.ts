import { Component, OnInit } from '@angular/core';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { CarteService } from '../services/carte.service';
import { Carte } from '../models/carte.interface';  // Importation correcte du modèle Carte

@Component({
  selector: 'app-patrimoine3',
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent],
  templateUrl: './patrimoine3.component.html',
  standalone: true,
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
  ngOnInit(): void {  // Ajout de la méthode requise
    this.loadCartes();
  }

  loadCartes() {
    const toutesLesCartes = this.carteService.getAllCartes();
    this.cartes = toutesLesCartes
      .filter(carte => {
        // Vérifie que l'ID commence par '1.' ET est supérieur à '1.6'
        if (carte.id.startsWith('1.')) {
          const idNumber = parseFloat(carte.id.split('.')[1]);
          return idNumber > 6;
        }
        return false;
      })
      .map(carte => ({
        image: carte.imageUrl,
        titre: carte.titre,
        id: carte.id,
        description: carte.description,
        adresse: carte.adresse,
        imageUrl: carte.imageUrl
      }));
  }

  ajouterCarte() {
    // Validation de l'ID (doit être > 1.6)
    const idNumber = parseFloat(this.nouvelleCarte.id.split('.')[1]);
    if (this.nouvelleCarte.id.startsWith('1.') && idNumber > 6) {
      this.carteService.addCarte(this.nouvelleCarte);
      this.loadCartes();
      this.nouvelleCarte = { imageUrl: '', titre: '', id: '', description: '', adresse: '' };
    } else {
      alert("L'ID doit être supérieur à 1.6");
    }
  }
}