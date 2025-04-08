import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent {
  carteId: string = '';
  carte: Carte | null = null;
  errorMessage: string = '';

  constructor(private router: Router, private carteService: CarteService) {}

  onSearch() {
    if (!this.carteId.trim()) {
      this.errorMessage = "Veuillez entrer un ID.";
      this.carte = null;
      return;
    }

    const foundCarte = this.carteService.getCarteById(this.carteId.trim());

    if (!foundCarte) {
      this.errorMessage = "Aucune carte trouvée avec cet ID.";
      this.carte = null;
    } else {
      this.carte = { ...foundCarte }; // Cloner pour modification
      this.errorMessage = '';
    }
  }

  onConfirmModifier() {
    if (this.carte) {
      this.carteService.updateCarte(this.carte);
      console.log("Carte modifiée :", this.carte);
      this.router.navigate(['/']);
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
