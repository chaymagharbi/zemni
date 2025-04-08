import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Location } from '@angular/common'; // Importation de Location
import { CarteService } from '../services/carte.service'; 
import { Carte } from '../models/carte.interface';
// Définir un type pour l'état de navigation

@Component({
  selector: 'app-modifier',
  standalone: true,
  imports: [FormsModule], // Inclure FormsModule pour la gestion des ngModel
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit {
  carte: Carte = {
    id: '',
    titre: '',
    description: '',
    adresse: '',
    imageUrl: ''
  };

  constructor(
    private router: Router,
    private location: Location,
    private carteService: CarteService 
  ) {}

  ngOnInit(): void {
    const navigation = this.location.getState() as { carte: Carte };
    if (navigation && navigation.carte) {
      this.carte = navigation.carte;
    }
  }

  confirm() {
    this.carteService.updateCarte(this.carte);
    console.log('Carte modifiée', this.carte);
    this.router.navigate(['/']);
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}