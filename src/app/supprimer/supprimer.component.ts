import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carte } from '../models/carte.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-supprimer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.scss']
})
export class SupprimerComponent implements OnInit {
  carteId: string = ''; // ID de la carte à rechercher
  carte: Carte | null = null;
  cartes: Carte[] = [
    { id: '1', titre: 'Endroit 1', description: 'Description 1', adresse: 'Adresse 1', imageUrl: '/path/to/image1.jpg' },
    { id: '2', titre: 'Endroit 2', description: 'Description 2', adresse: 'Adresse 2', imageUrl: '/path/to/image2.jpg' },
    // Ajouter plus de cartes pour la démonstration
  ];
  errorMessage: string = ''; // Message d'erreur si la carte n'existe pas

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch() {
    if (!this.carteId) {
      this.errorMessage = 'L\'ID est obligatoire.';
      return;
    }

    // Rechercher la carte par ID
    this.carte = this.cartes.find(c => c.id === this.carteId) || null;

    if (!this.carte) {
      this.errorMessage = 'Carte non trouvée.';
    } else {
      this.errorMessage = ''; // Réinitialiser le message d'erreur
    }
  }

  onConfirmDelete() {
    if (this.carte) {
      const carteIndex = this.cartes.findIndex(c => c.id === this.carte!.id); // Ajout du non-null assertion

      if (carteIndex !== -1) {
        this.cartes.splice(carteIndex, 1); // Supprimer la carte
        console.log('Carte supprimée', this.carte);
        this.router.navigate(['/']); // Rediriger après la suppression
      }
    }
  }

  onCancel() {
    this.router.navigate(['/']); // Rediriger si l'annulation est choisie
  }
}
