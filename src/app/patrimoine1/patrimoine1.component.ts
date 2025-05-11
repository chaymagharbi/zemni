import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patrimoine1',
  standalone: true,
  templateUrl: './patrimoine1.component.html',
  styleUrls: ['./patrimoine1.component.scss'],
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent, FormsModule]
})
export class Patrimoine1Component implements OnInit {
  adminMode = false;
  isRestaurationActive = false;
  isAdminPage = false;
  isRecherchePage = false;

  imgData = {
    imageSrc: '/assets/vert.jpg',
    text: 'Narjalek dima'
  };

  cartes: Carte[] = [];

  nouvelleCarte: Carte = {
    id: undefined, // auto-incrémenté
    nom: '',
    description: '',
    adresse: '',
    imageurl: '',
    prix: undefined,
    categorie: 'patrimoine'
  };

  constructor(private carteService: CarteService, private router: Router) {}

  async ngOnInit() {
    await this.carteService.chargerCartesDepuisBackend();
    this.cartes = this.carteService.cartes().filter(carte => carte.categorie === 'patrimoine');
  }
  

  loadCartes() {
    this.cartes = this.carteService.cartes().filter(carte => carte.categorie === 'patrimoine');
  }

  async ajouterCarte() {
    if (!this.nouvelleCarte.nom || !this.nouvelleCarte.description || !this.nouvelleCarte.adresse) {
      alert("Veuillez remplir tous les champs obligatoires.");
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
        categorie: 'patrimoine'
      };
    } catch (error) {
      alert("Erreur lors de l'ajout de la carte.");
    }
  }
}
