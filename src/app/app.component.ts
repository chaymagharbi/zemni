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
  title= 'zemni';
  cartesFiltrees: Carte[] = [];
  isRecherchePage = false;

  constructor(private carteService: CarteService) {}

  async filtrerCartesGlobale(terme: string) {
    this.isRecherchePage = terme.trim().length > 0;
  
    if (!terme.trim()) {
      this.cartesFiltrees = [];
      return;
    }
  
    try {
      // Charge les cartes si pas déjà fait
      if (this.carteService.cartes().length === 0) {
        await this.carteService.chargerCartesDepuisBackend();
      }
  
      this.cartesFiltrees = this.carteService.cartes().filter(carte =>
        carte.nom.toLowerCase().includes(terme.toLowerCase()) ||
        carte.description.toLowerCase().includes(terme.toLowerCase()) ||
        carte.adresse.toLowerCase().includes(terme.toLowerCase())
      );
    } catch (err) {
      console.error("Erreur pendant le filtrage :", err);
      this.cartesFiltrees = [];
    }
  }
}
  
