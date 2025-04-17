import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  styleUrl: './recherche.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class RechercheComponent implements OnInit {
  toutesCartes: Carte[] = [];
  cartesFiltres: Carte[] = [];
  rechercheActive = false;

  constructor(private carteService: CarteService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.toutesCartes = this.carteService.getAllCartes();

    // 🔍 Lire le paramètre "q" de l’URL
    this.route.queryParams.subscribe(params => {
      const query = params['q'] || '';
      this.filtrerCartes(query);
    });
  }

  filtrerCartes(query: string) {
    this.rechercheActive = true;
    this.cartesFiltres = this.toutesCartes.filter(carte =>
      carte.titre.toLowerCase().includes(query.toLowerCase()) ||
      carte.description.toLowerCase().includes(query.toLowerCase())
    );
  }
}
