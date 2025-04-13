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

  filtrerCartesGlobale(terme: string) {
    const toutesLesCartes = this.carteService.getAllCartes();
    this.isRecherchePage = terme.trim().length > 0;

    this.cartesFiltrees = toutesLesCartes
      .filter(carte =>
        carte.titre.toLowerCase().includes(terme.toLowerCase()) ||
        carte.description.toLowerCase().includes(terme.toLowerCase()) ||
        carte.adresse.toLowerCase().includes(terme.toLowerCase())
      )
      .map(carte => ({ ...carte }));
  }
}
  
