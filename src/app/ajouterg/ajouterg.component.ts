import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouterg',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouterg.component.html',
  styleUrls: ['./ajouterg.component.scss']
})
export class AjoutergComponent {
  carte: Carte = {
    id: '',
    titre: '',
    description: '',
    adresse: '',
    imageUrl: ''
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private carteService: CarteService, private router: Router) {}

  onConfirmAjouterg() {
    const carteExistante = this.carteService.getCarteById(this.carte.id.trim());

    if (carteExistante) {
      this.errorMessage = "L'ID existe déjà. Veuillez choisir un autre ID.";
      this.successMessage = '';
    } else {
      this.carteService.addCarte(this.carte);
      this.successMessage = "Carte ajoutée avec succès !";
      this.errorMessage = '';

      // Optionnel : reset du formulaire après ajout
      this.carte = {
        id: '',
        titre: '',
        description: '',
        adresse: '',
        imageUrl: ''
      };
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
