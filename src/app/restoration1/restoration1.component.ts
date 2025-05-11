import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restoration1',
  standalone: true,
  templateUrl: './restoration1.component.html',
  styleUrls: ['./restoration1.component.scss'],
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent, FormsModule]
})
export class Restoration1Component implements OnInit {
  adminMode = false;
  isRestaurationActive = false;
  isAdminPage = false;
  isRecherchePage = false;

  imgData = {
    imageSrc: '/assets/kaayyda.jpg',
    text: 'Kaayda al Kif'
  };

  cartes: Carte[] = [];

  nouvelleCarte: Carte = {
    id: undefined,
    nom: '',
    description: '',
    adresse: '',
    imageurl: '',
    prix: undefined,
    categorie: 'restauration'
  };

  constructor(private carteService: CarteService, private router: Router) {}

  async ngOnInit() {
    await this.carteService.chargerCartesDepuisBackend();
    this.cartes = this.carteService.cartes().filter(carte => carte.categorie === 'restauration');
  }
  

  loadCartes() {
    this.cartes = this.carteService.cartes().filter(carte => carte.categorie === 'restauration');
  }

  async ajouterCarte() {
    if (!this.nouvelleCarte.nom || !this.nouvelleCarte.description || !this.nouvelleCarte.adresse) {
      alert("Tous les champs doivent être remplis");
      return;
    }

    const carteSansId = { ...this.nouvelleCarte };
    delete carteSansId.id;

    try {
      await this.carteService.ajouterCarte(carteSansId);
      this.loadCartes();

      this.nouvelleCarte = {
        id: undefined,
        nom: '',
        description: '',
        adresse: '',
        imageurl: '',
        prix: undefined,
        categorie: 'restauration'
      };
    } catch (error) {
      alert("Une erreur est survenue lors de l'ajout de la carte");
    }
  }
}
