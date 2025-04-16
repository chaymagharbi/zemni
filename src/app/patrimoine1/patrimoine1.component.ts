import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { filter } from 'rxjs/operators';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { RouterModule } from '@angular/router';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
@Component({
  selector: 'app-patrimoine1',
  standalone: true,
  templateUrl: './patrimoine1.component.html',
  styleUrls: ['./patrimoine1.component.scss'],
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent]
})
export class Patrimoine1Component implements OnInit {
  adminMode = false;
  isRestaurationActive = false;
  isAdminPage = false;
  isRecherchePage = false;

  imgData = {
    imageSrc: '/assets/vert.jpg',
    text: 'Narjalek dima'
  };

  cartes: Carte[] = [];

  nouvelleCarte: Carte = {
    imageUrl: '',
    titre: '',
    id: '',
    description: '',
    adresse: ''
  };

  constructor(private carteService: CarteService,private router: Router) {}

  ngOnInit() {
    this.loadCartes(); // recharge les cartes à l'initialisation
  }

  loadCartes() {
    const toutesLesCartes = this.carteService.getAllCartes();

    this.cartes = toutesLesCartes
      .filter((carte: Carte) => carte.id.startsWith('1.')) // typage explicite
      .map((carte: Carte) => ({ ...carte })); // copie conforme
  }

  ajouterCarte() {
    const idNumber = parseFloat(this.nouvelleCarte.id.split('.')[1]);

    if (this.nouvelleCarte.id.startsWith('1.')) {
      this.carteService.addCarte({ ...this.nouvelleCarte }); // copie pour éviter mutation
      this.loadCartes(); // mise à jour de la liste affichée
      this.nouvelleCarte = {
        imageUrl: '',
        titre: '',
        id: '',
        description: '',
        adresse: ''
      };
    } else {
      alert("L'ID doit être 1.x");
    }
  }

  toggleAdminMode() {
    this.adminMode = !this.adminMode;
  }
  ajouter() {
    console.log("Naviguer vers le composant AjouterCarte");
    this.router.navigate(['/ajouter']);
  }

  modifier() {
    console.log("Naviguer vers le composant ModifierCarte");
    this.router.navigate(['/modifier']);
  }

  supprimer() {
    console.log("Naviguer vers le composant SupprimerCarte");
    this.router.navigate(['/supprimer']);
  }
  
}
