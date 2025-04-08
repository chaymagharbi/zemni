import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importer FormsModule

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [FormsModule], // Ajouter FormsModule dans les imports
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent {
  carte = {
    id: '',
    titre: '',
    description: '',
    adresse: '',
    imageUrl: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Logique pour ajouter la carte
    console.log('Carte ajoutée:', this.carte);
    this.router.navigate(['/']); // Rediriger après l'ajout
  }

  onCancel() {
    this.router.navigate(['/']); // Rediriger si l'annulation est choisie
  }
}

