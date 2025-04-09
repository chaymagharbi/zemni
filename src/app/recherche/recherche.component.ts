import { Component, OnInit } from '@angular/core';
import { CarteService } from '../services/carte.service';
import { Carte } from '../models/carte.interface';
import { CarteComponent } from '../carte/carte.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recherche',
  standalone: true,
  imports: [CommonModule, CarteComponent, NavbarComponent],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.scss'
})
export class RechercheComponent {
  toutesCartes: Carte[] = [];
  cartesFiltres: Carte[] = [];

  constructor(private carteService: CarteService) {}

  ngOnInit() {
    this.toutesCartes = this.carteService.getAllCartes();
    this.cartesFiltres = [...this.toutesCartes];
  }

  filtrerCartes(query: string) {
    this.cartesFiltres = this.toutesCartes.filter(carte =>
      carte.titre.toLowerCase().includes(query.toLowerCase())
    );
  }
}

