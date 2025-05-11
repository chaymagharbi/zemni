import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarteService } from '../services/carte.service';
import { Carte } from '../models/carte.interface';
@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent {
  private carteService = inject(CarteService);
  private router = inject(Router);

  categories: Carte['categorie'][] = ['patrimoine', 'restauration', 'gastronomie', 'vetements'];  
  nouvelleCarte: Omit<Carte, 'id'> = {
    nom: '',
    description: '',
    adresse: '',
    imageurl: '',
    categorie: 'patrimoine', // Valeur par défaut
    prix: undefined // Initialisé comme undefined
  };

  categorieSelectionnee = 'patrimoine';
  errorMessage = '';
  successMessage = '';
  isSubmitting = false;

  get showPrixField(): boolean {
    return this.categorieSelectionnee === 'gastronomie' || 
           this.categorieSelectionnee === 'vetements';
  }

  async onSubmit() {
    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.validateForm()) {
      this.isSubmitting = false;
      return;
    }

    try {
      // Préparation des données avec typage strict
      const carteData: Omit<Carte, 'id'> = {
        nom: this.nouvelleCarte.nom,
        description: this.nouvelleCarte.description,
        adresse: this.nouvelleCarte.adresse,
        imageurl: this.nouvelleCarte.imageurl,
        categorie: this.nouvelleCarte.categorie,
        prix: this.showPrixField ? this.nouvelleCarte.prix : undefined
      };

      await this.carteService.ajouterCarte(carteData);
      this.successMessage = 'Carte ajoutée avec succès !';
      this.resetForm();

      setTimeout(() => {
        this.router.navigate([`/${this.categorieSelectionnee}`]);
      }, 1500);

    } catch (error: any) {
      this.errorMessage = error?.error?.detail || 'Erreur lors de l\'ajout. Vérifiez les données et le serveur.';
      console.error('Erreur détaillée :', error);    
    } finally {
      this.isSubmitting = false;
    }
  }

  private validateForm(): boolean {
    const requiredFields = [
      this.nouvelleCarte.nom.trim(),
      this.nouvelleCarte.description.trim(),
      this.nouvelleCarte.adresse.trim(),
      this.nouvelleCarte.imageurl.trim(),
      this.categorieSelectionnee
    ];

    if (requiredFields.some(field => !field)) {
      this.errorMessage = 'Tous les champs sont requis';
      return false;
    }

    if (this.showPrixField && this.nouvelleCarte.prix === null) {
      this.errorMessage = 'Le prix est requis pour cette catégorie';
      return false;
    }

    return true;
  }

  resetForm() {
    this.nouvelleCarte = {
      nom: '',
      description: '',
      adresse: '',
      imageurl: '',
      categorie: 'patrimoine', // Maintenu en cohérence avec la structure
      prix: undefined          // Correctement typé comme undefined
    };
  }
}