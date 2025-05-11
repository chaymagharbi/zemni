import { Component, OnInit } from '@angular/core';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
@Component({
  selector: 'app-vetement1',
  standalone: true,
  templateUrl: './vetement1.component.html',
  styleUrls: ['./vetement1.component.scss'],
  imports: [CommonModule, FormsModule,NavbarComponent,ImgprComponent]
})
export class Vetement1Component implements OnInit {
  adminMode = false;
  isAdminPage = false;
  isRecherchePage = false;

  imgData = {
    imageSrc: '/assets/bgkachech.jpg',
    text: 'Kachech'
  };

  cartes: Carte[] = [];

  nouvelleCarte: Carte = {
    imageurl: '',
    nom: '',
    id: undefined, // sera généré par le backend
    description: '',
    adresse: '',
    prix: undefined,
    categorie: 'vetements'
  };

  constructor(private carteService: CarteService, private router: Router) {}

  async ngOnInit() {
    await this.carteService.chargerCartesDepuisBackend();
    this.cartes = this.carteService.cartes().filter(carte => carte.categorie === 'vetements');
  }
  

  loadCartes() {
    // Charger les cartes du backend
    this.carteService.chargerCartesParCategorie('vetement').then(cartes => {
      this.cartes = cartes;
    });
  }

  ajouterCarte() {
    // Validation des champs obligatoires
    if (!this.nouvelleCarte.nom || !this.nouvelleCarte.description || !this.nouvelleCarte.adresse || this.nouvelleCarte.prix == null || this.nouvelleCarte.prix <= 0) {
      alert("Veuillez remplir tous les champs et entrer un prix valide.");
      return;
    }

    // Ne pas définir l'id ici : il est généré côté backend
    const carteSansId = { ...this.nouvelleCarte };
    delete carteSansId.id;

    this.carteService.ajouterCarte(carteSansId).then(() => {
      this.loadCartes();
      
      // Réinitialisation du formulaire après ajout
      this.nouvelleCarte = {
        imageurl: '',
        nom: '',
        id: undefined,
        description: '',
        adresse: '',
        prix: undefined,
        categorie: 'vetements'
      };
    });
  }
}
