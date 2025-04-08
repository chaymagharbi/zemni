import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Location } from '@angular/common'; // Importation de Location

// Définir un type pour l'état de navigation
interface NavigationState {
  carte: {
    id: string;
    titre: string;
    description: string;
    adresse: string;
    imageUrl: string;
  };
}

@Component({
  selector: 'app-modifier',
  standalone: true,
  imports: [FormsModule], // Inclure FormsModule pour la gestion des ngModel
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit {
  carte = {
    id: '',
    titre: '',
    description: '',
    adresse: '',
    imageUrl: ''
  };

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {
    // Récupérer l'état de la navigation avec un type explicite
    const navigation = this.location.getState() as NavigationState; // Utilisation du type NavigationState
    if (navigation && navigation.carte) {
      this.carte = navigation.carte; // Charger les données existantes si modification
    }
  }

  // Fonction pour confirmer l'ajout ou la modification de la carte
  confirm() {
    // Logique pour enregistrer la carte, peut-être en utilisant un service pour sauvegarder les données
    console.log('Carte confirmée', this.carte);
    this.router.navigate(['/']); // Rediriger après la confirmation
  }

  // Fonction pour annuler l'édition de la carte
  onCancel() {
    // Par exemple, rediriger vers la page d'accueil ou la page précédente
    this.router.navigate(['/']); 
  }
}
