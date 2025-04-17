import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Carte } from '../models/carte.interface';
import { CarteService } from '../services/carte.service';
@Component({
  selector: 'app-gastronomie1',
  standalone: true,
  templateUrl: './gastronomie1.component.html',
  imports: [NavbarComponent, ImgprComponent,CommonModule,CarteComponent],
  styleUrls: ['./gastronomie1.component.scss']
})
export class Gastronomie1Component implements OnInit{
    adminMode = false;
    isRestaurationActive = false;
    isAdminPage = false;
    isRecherchePage = false;
    imgData = {
        imageSrc: '/assets/dmaakk.jpg',// a changer 
        text: 'Dmak'
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
          .filter((carte: Carte) => carte.id.startsWith('3.')) // typage explicite
          .map((carte: Carte) => ({ ...carte })); // copie conforme
      }
    
      ajouterCarte() {
        const idNumber = parseFloat(this.nouvelleCarte.id.split('.')[3]);
    
        if (this.nouvelleCarte.id.startsWith('3.') ) {
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
          alert("L'ID doit être 3.x");
        }
      }
      
      
      
    }
    