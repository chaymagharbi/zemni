import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-patrimoine1',
  standalone: true,
  templateUrl: './patrimoine1.component.html',
  styleUrls: ['./patrimoine1.component.scss'],
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent]
})
export class Patrimoine1Component {
  cartes = [
    {
      image: '/assets/sbeitla.jpg',
      id:'1.1',
      titre: 'Musée de Sbeitla',
      description: 'Ruines romaines impressionnantes avec trois temples capitolins.',
      adresse: 'Sbeitla, Gouvernorat de Kasserine'
    },
    {
      image: '/assets/gightis.jpg',
      titre: 'Gightis',
      id:'1.2',
      description: 'Ancienne cité romaine avec thermes, temples et habitations.',
      adresse: 'Près de Boughrara, Gouvernorat de Médenine'
    },
    {
      image: '/assets/ain_kan.jpg',
      titre: 'Ain Kanassira',
      id:'1.3',
      description: 'Située à environ 1h30 de Tunis, cette source d\'eau chaude à 44°C est nichée entre mer et montagne, offrant un cadre unique pour le camping.',
      adresse: 'Ain Kanassira, près de Korbous, Gouvernorat de Nabeul.'
    }
  ];
  constructor(private router: Router) {}

  // Méthode pour naviguer vers la page de suppression
  goToDelete(id: number) {
    this.router.navigate(['/supprimer', id]);
  }

  // Méthode pour naviguer vers la page de modification
  goToEdit(id: number) {
    this.router.navigate(['/modifier', id]);
  }
}
