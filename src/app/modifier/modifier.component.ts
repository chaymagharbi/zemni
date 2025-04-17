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
  carteId: string = '';
  carte: Carte | null = null;
  errorMessage: string = '';
  originalId: string = '';
  isModified = false;
  categorie: string = '';
  constructor(private router: Router, private carteService: CarteService,private route: ActivatedRoute ) {
    this.route.queryParams.subscribe(params => {
      this.categorie = params['categorie'] || '';
  });
}

onSearch() {
  this.isModified = false;

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
    this.carte = JSON.parse(JSON.stringify(foundCarte));
    
    // 🧠 Déduire la catégorie à partir de l'ID :
    const prefix = this.carte!.id.split('.')[0];
    switch (prefix) {
      case '1':
        this.categorie = 'patrimoine';
        break;
      case '2':
        this.categorie = 'restauration';
        break;
      case '3':
        this.categorie = 'gastronomie';
        break;
      case '4':
        this.categorie = 'vetement';
        break;
      default:
        this.categorie = '';
    }

    this.errorMessage = '';
  }
}



  onConfirmModifier() {
    if (!this.carte) return;

    // Vérifie si des modifications ont été faites
    const originalCarte = this.carteService.getCarteById(this.carte.id);
    if (JSON.stringify(originalCarte) === JSON.stringify(this.carte)) {
      this.errorMessage = "Aucune modification détectée.";
      return;
    }

    // Appel le service et vérifie le succès
    if (this.carteService.updateCarte(this.carte)) {
      this.isModified = true;
      this.errorMessage = "Carte mise à jour avec succès !";
      setTimeout(() => {
        this.router.navigate(['/']); // ou /patrimoine3 si tu veux rediriger direct là-bas
      }, 1500);
    } else {
      this.errorMessage = "Échec de la mise à jour de la carte.";
    }
  } 

  onCancel() {
    this.router.navigate(['/']);
  }
  getNomLabel(): string {
    switch (this.categorie) {
      case 'gastronomie':
        return 'plat';
      case 'vetement':
        return 'vêtement';
      case 'patrimoine':
        return 'endroit';
      case 'restauration':
        return 'endroit';
      default:
        return ''; 
    }
  }
  
  shouldShowIntervallePrix(): boolean {
    return this.categorie === 'gastronomie' || this.categorie === 'vetement';
  }
  
}
