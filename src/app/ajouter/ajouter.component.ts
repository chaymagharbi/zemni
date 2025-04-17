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
  
    // Vérifier préfixe d'ID selon la catégorie
    const prefixeAttendu = this.getPrefixeIdCategorie(this.categorie);
    if (!idTrim.startsWith(prefixeAttendu + '.')) {
      this.errorMessage = `L'ID doit commencer par ${prefixeAttendu}. pour la catégorie ${this.categorie}.`;
      this.successMessage = '';
      return;
    }
  
    const carteExistante = this.carteService.getCarteById(idTrim);
    if (carteExistante) {
      this.errorMessage = "L'ID existe déjà. Veuillez choisir un autre ID.";
      this.successMessage = '';
      return;
    }
  
    if (this.shouldShowIntervallePrix() && !this.carte.intervallePrix?.trim()) {
      this.errorMessage = "Veuillez renseigner l'intervalle de prix.";
      this.successMessage = '';
      return;
    }
  
    this.carteService.addCarte(this.carte);
    this.successMessage = "Carte ajoutée avec succès !";
    this.errorMessage = '';
  
    // Redirection selon la catégorie
    this.router.navigate([`/${this.categorie}3`]);
  
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
  getPrefixeIdCategorie(categorie: string): string {
    switch (categorie) {
      case 'patrimoine': return '1';
      case 'restauration': return '2';
      case 'gastronomie': return '3';
      case 'vetement': return '4';
      default: return '';
    }
  }
}
