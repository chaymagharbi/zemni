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

  constructor(private carteService: CarteService, private router: Router) {}

  onConfirmAjouter() {
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
