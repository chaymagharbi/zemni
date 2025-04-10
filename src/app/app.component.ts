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
  isRecherchePage: boolean = false;

  constructor(private router: Router, private carteService: CarteService) {
    // Récupérer toutes les cartes au départ
    this.toutesCartes = this.carteService.getAllCartes();
  
    // Gérer la navigation et les pages d'administration
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        
        // Détecter si c'est une page admin
        this.isAdminPage = ['/ajouter', '/modifier', '/supprimer'].includes(url);
        
        // Détecter si c'est la page de recherche
        this.isRecherchePage = url.includes('/recherche');
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

  toutesCartes: Carte[] = [];

  filtrerCartesGlobale(query: string) {
    // Naviguer vers la page de recherche avec le terme en paramètre
    this.router.navigate(['/recherche'], { queryParams: { q: query } });
  }
  
  
}
-------------------------------------------------
  app.component.ts(fatma)
  //
  import { Component } from '@angular/core';
import { CarteComponent } from './carte/carte.component'; // ⚠️ mets ici le bon chemin si différent
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,RouterModule,NavbarComponent,CarteComponent],
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; padding: 16px;">
    <app-carte
      *ngFor="let card of cartes"
      [image]="card.image"
      [title]="card.title"
      [subtitle]="card.subtitle"
      [description]="card.description"
      style="width: 250px;">
    </app-carte>
  </div>
`,



})
export class AppComponent {
  cartes = [
    {
      image: 'assets/dmak.jpg',
      title: '<:<Dmak>:>',
      subtitle: 'C’est un mot en tunisien qui signifie que c’est un bon plat',
      description: '“« Dmak » désigne cette invitation gourmande à la dégustation de plats tunisiens où chaque bouchée est un concentré de convivialité et de traditions. On y retrouve aussi bien les briks croustillantes, farcies d’œuf, de thon ou de viande hachée, que les tajines sucrés‑salés au poulet et aux citrons confits, sans oublier le couscous généreusement garni de légumes de saison et de morceaux de mouton fondants. Le « Dmak » célèbre les épices typique une pointe de harissa  et l’or liquide qu’est l’huile d’olive.',
    },
    {
      image: 'assets/kachech.jpg',
      title: '<:<kachech>:>',
      subtitle: 'Ce mot en tunisien signifie “Habillé traditionnellement”',
      description: '“« Kachech » désigne bien plus qu’un simple vêtement : c’est le symbole vivant du raffinement et du patrimoine tunisien. Confectionné dans des étoffes précieuses — velours brodé, soie chatoyante ou coton finement tissé — il se pare de motifs traditionnels inspirés de l’architecture andalouse et des arabesques mauresques. Porté lors des grandes occasions (mariages, fêtes religieuses ou cérémonies familiales), le kachech se compose souvent d’une tunique longue, d’un gilet ouvert orné de fils. ',
    },
    {
      image: 'assets/kayda.jpg',
      title: '<:<kaayda al kif>:>',
      subtitle: 'Un bon moment de kif sur fond de musique et de couleurs',
      description: '“« Kaayda al kif » évoque l’art de savourer pleinement l’instant présent dans une ambiance à la fois festive et authentique. C’est l’expression qui décrit ces moments de partage et de bonne humeur, que ce soit autour d’un verre de thé à la menthe dans une terrasse ensoleillée, au son d’un oud et des rires entre amis, ou lors d’une soirée animée sous les guirlandes de lampions. Cette locution incarne l’esprit chaleureux de la Tunisie : convivialité, musique,traditions, couleurs et joie de vivre .',
    },
    {
      image: 'assets/narjalekdima.jpg',
      title: '<:<Narjalekdima>:>',
      subtitle: 'Rêver, toujours rêver',
      description: '“« Narjaalek dima » est bien plus qu’une simple expression ; c’est une promesse et un appel à revenir sans cesse explorer les mille visages de la Tunisie. De la blancheur éclatante des ruelles de Sidi Bou Saïd aux vestiges majestueux de Carthage, en passant par les dunes dorées du Sahara et les oasis paisibles de Tozeur, chaque recoin du pays invite à une découverte renouvelée. Les souks animés de Tunis, avec leurs épices parfumées et leurs étoffes colorées, côtoient les amphithéâtres antiques de Dougga, témoins d’un passé romain exceptionnel. ',
    }
  ];
}
//
