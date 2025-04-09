import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImgprComponent } from './imgpr/imgpr.component';
import { Carte } from './models/carte.interface';
import { CarteService } from './services/carte.service';

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
  isAdminPage = false;

  constructor(private router: Router, private carteService: CarteService) {
    // Récupérer toutes les cartes au départ
    this.toutesCartes = this.carteService.getAllCartes();
    this.cartesFiltres = [...this.toutesCartes];
  
    // Gérer la navigation et les pages d'administration
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        this.isAdminPage = ['/ajouter', '/modifier', '/supprimer'].includes(url);
      });
  }

  // Fonction pour basculer entre le mode Admin
  toggleAdminMode() {
    this.adminMode = !this.adminMode;
  }

  // Fonction pour basculer entre les catégories patrimoine et restauration
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

  // Fonction pour mettre à jour les données de l'image
  updateImgData(imageSrc: string, text: string) {
    this.imgData = { imageSrc, text };
  }

  // Navigation pour l'ajout, modification et suppression de cartes
  ajouter() {
    this.router.navigate(['/ajouter'], { state: { carte: null } });
  }

  modifier() {
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
    this.router.navigate(['/modifier'], { state: { carte: carte } });
  }

  cartesFiltres: Carte[] = [];
  toutesCartes: Carte[] = [];

  


  filtrerCartesGlobale(query: string) {
    if (!query || query.trim() === '') {
      this.cartesFiltres = [...this.toutesCartes];
    } else {
      this.cartesFiltres = this.toutesCartes.filter(carte =>
        carte.titre.toLowerCase().includes(query.toLowerCase()) ||
        carte.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    console.log('Résultats de la recherche:', this.cartesFiltres);
  }
}
