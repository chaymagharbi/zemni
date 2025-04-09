import { Component ,OnInit} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { CarteService } from '../services/carte.service';
import { Carte } from '../models/carte.interface'; 
@Component({
  selector: 'app-restoration3',
  imports: [NavbarComponent, ImgprComponent, CommonModule, CarteComponent],
  standalone: true,
  templateUrl: './restoration3.component.html',
  styleUrl: './restoration3.component.scss'
})
export class Restoration3Component implements OnInit {
  cartes: Carte[] = [];
  nouvelleCarte: Carte = { 
    imageUrl: '',
    titre: '',
    id: '',
    description: '',
    adresse: ''
  };
    constructor(private carteService: CarteService) {}
    ngOnInit(): void {  // Ajout de la méthode requise
      this.loadCartes();
    }
  
    loadCartes() {
      const toutesLesCartes = this.carteService.getAllCartes();
      this.cartes = toutesLesCartes
        .filter(carte => {
          if (carte.id.startsWith('2.')) {
            const idNumber = parseFloat(carte.id.split('.')[1]);
            return idNumber > 6; 
          }
          return false;
        })
        .map(carte => ({
          image: carte.imageUrl,
          titre: carte.titre,
          id: carte.id,
          description: carte.description,
          adresse: carte.adresse,
          imageUrl: carte.imageUrl
        }));
    }
  
    ajouterCarte() {
      if (!this.nouvelleCarte.id || this.nouvelleCarte.id.split('.').length !== 2) {
        alert("L'ID doit être au format '2.x'");
        return;
      }
  
      const idParts = this.nouvelleCarte.id.split('.');
      const idNumber = parseFloat(idParts[1]);
      
      if (idParts[0] === '2' && idNumber > 6 && !isNaN(idNumber)) {
        this.carteService.addCarte({
          ...this.nouvelleCarte,
          imageUrl: this.nouvelleCarte.imageUrl || '/assets/default.jpg' // Valeur par défaut
        });
        this.loadCartes();
        this.nouvelleCarte = { imageUrl: '', titre: '', id: '', description: '', adresse: '' };
      } else {
        alert("L'ID doit être au format '2.x' où x > 6");
      }
    }
  }