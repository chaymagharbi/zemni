import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carte } from '../models/carte.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarteService } from '../services/carte.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-supprimer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.scss']
})
export class SupprimerComponent {
  categorie: 'gastronomie' | 'vetements' | 'restauration' | 'patrimoine' = 'gastronomie';
  nom = '';
  message = '';

  constructor(private carteService: CarteService) {}

  async supprimerCarte() {
    if (!this.nom || !this.categorie) {
      this.message = "❗Veuillez renseigner le nom et la catégorie.";
      return;
    }

    try {
      await this.carteService.supprimerCarteParNom(this.categorie, this.nom);
      this.message = "✅ Carte supprimée avec succès.";
      this.nom = ''; // Réinitialiser le champ
    } catch {
      this.message = "❌ Erreur lors de la suppression.";
    }
  }

  fermer() {
    console.log("Fermeture (à implémenter si besoin)");
  }

}