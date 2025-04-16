import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent {
  carte: Carte = {
    id: '',
    titre: '',
    description: '',
    adresse: '',
    imageUrl: ''
  };

  errorMessage: string = '';
  successMessage: string = '';
  categorie: string = ''; // doit être défini via un <select> ou autre champ

  constructor(private carteService: CarteService, private router: Router) {}

  ajouterCarte() {
    const idTrim = this.carte.id.trim();
    if (!idTrim) {
      this.errorMessage = "L'ID est requis.";
      return;
    }

    const carteExistante = this.carteService.getCarteById(idTrim);

    if (carteExistante) {
      this.errorMessage = "L'ID existe déjà. Veuillez choisir un autre ID.";
      this.successMessage = '';
      return;
    }

    // Vérifier si intervallePrix est requis et non vide
    if (this.shouldShowIntervallePrix() && !this.carte.intervallePrix?.trim()) {
      this.errorMessage = "Veuillez renseigner l'intervalle de prix.";
      this.successMessage = '';
      return;
    }

    this.carteService.addCarte(this.carte);
    this.successMessage = "Carte ajoutée avec succès !";
    this.errorMessage = '';

    // Redirection selon l'ID
    if (idTrim.startsWith('1')) {
      this.router.navigate(['/patrimoine3']);
    } else if (idTrim.startsWith('2')) {
      this.router.navigate(['/restoration3']);
    } else {
      alert("ID invalide : doit commencer par 1 (patrimoine) ou 2 (restauration).");
    }

    // Réinitialiser le formulaire
    this.resetCarte();
  }

  shouldShowIntervallePrix(): boolean {
    return this.categorie === 'gastronomie' || this.categorie === 'vetement';
  }

  resetCarte() {
    this.carte = {
      id: '',
      titre: '',
      description: '',
      adresse: '',
      imageUrl: ''
      // Ne pas réinitialiser intervallePrix ici car il peut être défini via la catégorie
    };
  }

  onCancel() {
    this.router.navigate(['/']);
  }
  getNomLabel(): string {
    switch (this.categorie) {
      case 'gastronomie':
        return 'plat';
      case 'vetement':
        return 'vêtement';
      default:
        return 'endroit';
    }
  }
}
