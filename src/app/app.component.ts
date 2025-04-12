import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ImgprComponent } from './imgpr/imgpr.component';
import { Carte } from './models/carte.interface';
import { CarteService } from './services/carte.service';
import { CarteAccComponent } from './carte-acc/carte-acc.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent, ImgprComponent, CarteAccComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  adminMode = false;
  isRestaurationActive = false;
  isAdminPage = false;
  isRecherchePage = false;
  isHomePage = false;

  toutesCartes: Carte[] = [];

  cartes = [
    {
      image: 'assets/dmak.jpg',
      titre: '<:<Dmak>:>',
      description: '“« Dmak » désigne cette invitation gourmande à la dégustation de plats tunisiens ou chaque  bouchée est un concentré de ',
    },
    {
      image: 'assets/kachech.jpg',
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
    text: 'Découvrez, Savourez et vivez l\'âme du patrimoine tunisien',
  };

  constructor(private router: Router, private carteService: CarteService) {
    // Récupération des cartes au démarrage
    this.toutesCartes = this.carteService.getAllCartes();

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
    this.router.navigate(['/modifier'], { state: { carte } });
  }

  filtrerCartesGlobale(query: string) {
    this.router.navigate(['/recherche'], { queryParams: { q: query } });
  }
}
