import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-restoration3',
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent],
  standalone: true,
  templateUrl: './restoration3.component.html',
  styleUrl: './restoration3.component.scss'
})
export class Restoration3Component {
  cartes = [
    {
      image: '/assets/djerba.jpg',
      titre: 'El Foundouk Djerba',
      description: 'C\'est un caravansérail âgé de plus de 300 ans. Après 18 mois de rénovation, ce lieu de vie ouvre ses portes à tous à l\'été 2020. Le patio est un endroit où le design est inspiré d\'une atmosphère typiquement tunisienne dans lequel vous pourrez déguster des plats traditionnels tunisiens ainsi qu\'un large choix de plats internationaux tous faits maison à partir de produits frais.', 
      adresse: 'Fondouk Jomni, Rue Moncef Bey, Houmt Souk, Djerba Island 4180 Tunisie',
      id:'2.7',
    },
    {
      image: '/assets/sidi.jpg',
      titre: 'sidi Bouhdid',
      description: ' Café Sidi Bouhdid est classé 5éme au monde, réputées par une luminosité unique qu’offre le golfe d’Hammamet dominé par le mont Zaghouan et les dorsale derrière laquelle sa couche le soleil différemment chaque jour.',
      adresse: 'La Médina Arabe, Café Sidi Bouhdid',
      id:'2.8',
    },
    {
      image: '/assets/souk.jpg',
      titre: 'khottab el beb',
      description: ' Ce café a plus de 500 ans et mérite une visite (avec ou sans pause café). Superbe avec ses voûtes, c\'est un ancien foyer pour les élèves de la Mosquée Zitouna, il est ensuite devenu caravansérail. Les mosaïques qui ornent les murs du café sont pour certaines uniques',    
      adresse: 'Cafe Souk',
      id:'2.9',}

    ];

}
