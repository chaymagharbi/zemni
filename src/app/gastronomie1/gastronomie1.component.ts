import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gastronomie1',
  standalone: true,
  templateUrl: './gastronomie1.component.html',
  styleUrls: ['./gastronomie1.component.scss'],
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent, FormsModule]
})
export class Gastronomie1Component implements OnInit {
  adminMode = false;
  isRestaurationActive = false;
  isAdminPage = false;
  isRecherchePage = false;

  imgData = {
    imageSrc: '/assets/dmaakk.jpg',
    text: 'Dmak'
  };

  cartes: Carte[] = [];

  nouvelleCarte: Carte = {
    id: undefined, // auto-incrémenté
    nom: '',
    description: '',
    adresse: '',
    imageurl: '',
    prix: undefined,
    categorie: 'gastronomie'
  };

  constructor(private carteService: CarteService, private router: Router) {}

  async ngOnInit() {
    await this.carteService.chargerCartesDepuisBackend();
    this.cartes = this.carteService.cartes().filter(carte => carte.categorie === 'gastronomie');
  }
  
  loadCartes() {
    // charger toutes les cartes et filtrer celles de la catégorie gastronomie
    this.cartes = this.carteService.cartes().filter(carte => carte.categorie === 'gastronomie');
  }

  async ajouterCarte() {
    if (!this.nouvelleCarte.nom || !this.nouvelleCarte.description || !this.nouvelleCarte.adresse || this.nouvelleCarte.prix == null || this.nouvelleCarte.prix <= 0) {
      alert("Veuillez remplir tous les champs et entrer un prix valide.");
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
        categorie: 'gastronomie'
      };
    } catch (error) {
      alert("Erreur lors de l'ajout de la carte.");
    }
  }
}
