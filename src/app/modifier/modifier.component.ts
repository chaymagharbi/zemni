import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modifier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent {
  categories = [
    { value: 'vetements', label: 'Vêtements' },
    { value: 'gastronomie', label: 'Gastronomie' },
    { value: 'restauration', label: 'Restauration' },
    { value: 'patrimoine', label: 'Patrimoine' }
  ];

  selectedCategorie: string = '';
  originalNom: string = ''; // Pour garder trace du nom original en cas de modification
  carte: Carte = {
    nom: '',
    description: '',
    adresse: '',
    prix: 0,
    imageurl: '',
    categorie: 'gastronomie'
  };

  message: { text: string, isError: boolean } = { text: '', isError: false };
  isLoading: boolean = false;
  isExistingItem: boolean = false;

  constructor(private carteService: CarteService) {}

  async onNomBlur() {
    if (!this.carte.nom || !this.selectedCategorie) return;
    
    this.isLoading = true;
    try {
      const existingCarte = await this.carteService.getCarteParNom(this.selectedCategorie, this.carte.nom);
      this.originalNom = existingCarte.nom;
      this.carte = {
        ...existingCarte,
        categorie: this.selectedCategorie as Carte['categorie']
      };
      this.isExistingItem = true;
      this.message = { text: '', isError: false };
    } catch (error) {
      this.isExistingItem = false;
      if (error instanceof Error && error.message.includes('non trouvé')) {
        // Réinitialiser les champs sauf le nom et la catégorie
        this.carte = {
          nom: this.carte.nom,
          description: '',
          adresse: '',
          prix: 0,
          imageurl: '',
          categorie: this.selectedCategorie as Carte['categorie']
        };
        this.message = { 
          text: 'Nouvel élément - remplissez les champs et enregistrez', 
          isError: false 
        };
      } else {
        this.message = {
          text: 'Erreur lors de la vérification: ' + (error instanceof Error ? error.message : 'Erreur inconnue'),
          isError: true
        };
      }
    } finally {
      this.isLoading = false;
    }
  }

  async modifierCarte() {
    if (!this.carte || !this.selectedCategorie) return;

    this.isLoading = true;
    this.message = { text: '', isError: false };

    try {
      const { nom, description, adresse, prix, imageurl } = this.carte;
      
      // Si c'est un élément existant, on utilise le nom original pour la modification
      const nomOriginal = this.isExistingItem ? this.originalNom : nom;
      
      const result = await this.carteService.modifierCarte(
        this.selectedCategorie,
        nomOriginal,
        { nom, description, adresse, prix, imageurl }
      );

      this.message = { text: result.message, isError: false };
      this.isExistingItem = true;
      this.originalNom = nom; // Mettre à jour le nom original après modification
    } catch (error: any) {
      this.message = {
        text: error.message || 'Erreur lors de la modification',
        isError: true
      };
    } finally {
      this.isLoading = false;
    }
  }
  
  fermer() {
    this.carte = {
      nom: '',
      description: '',
      adresse: '',
      prix: 0,
      imageurl: '',
      categorie: this.selectedCategorie as Carte['categorie']
    };
    this.message = { text: '', isError: false };
    this.isExistingItem = false;
    this.originalNom = '';
  }

  get showPrixField(): boolean {
    return ['gastronomie', 'vetements'].includes(this.selectedCategorie);
  }
}