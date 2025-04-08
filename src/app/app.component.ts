import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImgprComponent } from './imgpr/imgpr.component';
import { Carte } from './models/carte.interface'; // Assurez-vous que le chemin vers carte.interface est correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, CommonModule, ImgprComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgData = {
    imageSrc: '/assets/vert.jpg',
    text: 'naarjalek dima'
  };
  adminMode = false;
  isRestaurationActive = false;
  currentPage = 1;

  constructor(private router: Router) {}

  toggleAdminMode() {
    this.adminMode = !this.adminMode;
  }

  toggleCategory() {
    this.isRestaurationActive = !this.isRestaurationActive;

    if (this.isRestaurationActive) {
      this.updateImgData('/assets/darzohra.jpg', 'Kaayda Al Kif');
      this.router.navigate(['/restauration1']);
    } else {
      this.updateImgData('/assets/vert.jpg', 'Naarjalek dima');
      this.router.navigate(['/patrimoine1']);
    }
  }

  updateImgData(imageSrc: string, text: string) {
    this.imgData = { imageSrc, text };
  }

  ajouter() {
    // Logique d'ajout d'une nouvelle carte
    console.log('Ajouter une nouvelle carte');
    // Rediriger vers la page d'édition avec une carte vide pour l'ajout
    this.router.navigate(['/ajouter'], { state: { carte: null } });
  }

  modifier() {
    // Rediriger vers la page de modification, en passant les données de la carte à modifier
    console.log('Modifier une carte');
    // Exemple avec une carte à modifier (mettre les données réelles ici)
    const carteToEdit: Carte = { 
      id: '1', 
      titre: 'Titre de la carte', 
      description: 'Description', 
      adresse: 'Adresse', 
      imageUrl: '/path/to/image' 
    };
    this.router.navigate(['/modifier'], { state: { carte: carteToEdit } });
  }

  supprimer() {
    // Logique pour supprimer une carte
    console.log('Supprimer une carte');
    // Rediriger vers la page de suppression avec une carte à supprimer
    // Vous pouvez passer l'objet carte à supprimer dans l'état de navigation
    const carteToDelete: Carte = { 
      id: '1', 
      titre: 'Titre de la carte', 
      description: 'Description', 
      adresse: 'Adresse', 
      imageUrl: '/path/to/image' 
    };
    this.router.navigate(['/supprimer'], { state: { carte: carteToDelete } });
  }

  onEdit(carte: Carte) {
    // Rediriger vers la page de modification en passant les données de la carte
    this.router.navigate(['/modifier'], { state: { carte: carte } });
  }
}
