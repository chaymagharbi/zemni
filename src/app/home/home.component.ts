import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
import { CarteAccComponent } from '../carte-acc/carte-acc.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, NavbarComponent, ImgprComponent, CarteAccComponent],  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  adminMode = false;
  isRestaurationActive = false;
  isAdminPage = false;
  isRecherchePage = false;
  isHomePage = false;

  toutesCartes: Carte[] = [];

  cartes = [
    {
      image: 'assets/food.jpg',
      titre: '<:<Dmak>:>',
      description: '“« Dmak » désigne cette invitation gourmande à la dégustation de plats tunisiens ou chaque  bouchée est un concentré de ',
    },
    {
      image: 'assets/kk.jpg',
      titre: '<:<kachech>:>',
      description: '“« Kachech » désigne bien plus qu’un simple vêtement : c’est le symbole vivant du raffinement',
    },
    {
      image: 'assets/kayda.jpg',
      titre: '<:<kaayda al kif>:>',
      description: '“« Kaayda al kif » évoque l’art de savourer pleinement l’instant présent',
    },
    {
      image: 'assets/narjalekdima.jpg',
      titre: '<:<Narjalek dima>:>',
      description: '“« Narjaalek dima » est bien plus qu’une simple expression ; c’est une promesse',
    }
  ];

  imgData = {
    imageSrc: 'assets/baner.jpg',
    text: `Découvrez, Savourez
  et vivez l’âme du patrimoine tunisien
  sur Zemni.tn`
  };

  constructor(private router: Router, private carteService: CarteService) {
    // Récupération des cartes au démarrage

    // Détection de la page actuelle
    this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
  .subscribe((event: NavigationEnd) => {
    const url = event.urlAfterRedirects || event.url;
    this.isAdminPage = ['/ajouter', '/modifier', '/supprimer'].includes(url);
    this.isRecherchePage = url.includes('/recherche');
    this.isHomePage = url === '/' ;
  });

  
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

  onEdit(carte: Carte) {
    this.router.navigate(['/modifier'], { state: { carte } });
  }
  
  

}
