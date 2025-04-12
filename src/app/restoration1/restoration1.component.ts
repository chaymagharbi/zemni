import { Component, OnInit } from '@angular/core'; // CHANGEMENT: Added OnInit
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-restoration1',
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent,FormsModule],
  standalone: true,
  templateUrl: './restoration1.component.html',
  styleUrl: './restoration1.component.scss'
})
export class Restoration1Component implements OnInit { // CHANGEMENT: Implemented OnInit
  adminMode = false;
  isRestaurationActive = false;
  isAdminPage = false;
  isRecherchePage = false;
  imgData = {
    imageSrc: '/assets/darzohra.jpg',
    text: 'kayyda al kif'
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

  ngOnInit(): void { // CHANGEMENT: Proper OnInit implementation
    this.loadCartes();
  }

  loadCartes() {
    const toutesLesCartes = this.carteService.getAllCartes();
    
    // CHANGEMENT: Correction du filtre (devrait être '2.' pour restoration)
    this.cartes = toutesLesCartes
      .filter((carte: Carte) => carte.id.startsWith('2.')) // CHANGEMENT: Changed from '1.' to '2.'
      .map((carte: Carte) => ({ 
        ...carte,
        imageUrl: carte.imageUrl || '/assets/default.jpg' // CHANGEMENT: Added fallback image
      }));
  }

  ajouterCarte() {
    // CHANGEMENT: Improved ID validation
    if (!this.nouvelleCarte.id || !this.nouvelleCarte.id.match(/^2\.\d+$/)) {
      alert("L'ID doit commencer par '2.' et être suivi de chiffres (ex: 2.1)");
      return;
    }

    // CHANGEMENT: Validate all required fields
    if (!this.nouvelleCarte.titre || !this.nouvelleCarte.description || !this.nouvelleCarte.adresse) {
      alert("Tous les champs doivent être remplis");
      return;
    }

    // CHANGEMENT: Check if ID already exists
    if (this.carteService.getCarteById(this.nouvelleCarte.id)) {
      alert("Une carte avec cet ID existe déjà");
      return;
    }

    this.carteService.addCarte({ ...this.nouvelleCarte });
    this.loadCartes();
    
    // CHANGEMENT: Reset form after successful addition
    this.nouvelleCarte = {
      imageUrl: '',
      titre: '',
      id: '',
      description: '',
      adresse: ''
    };
  }
}