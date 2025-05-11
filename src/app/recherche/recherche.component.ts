import { Component, inject } from '@angular/core';
import { CarteService } from '../services/carte.service';
import { CarteComponent } from '../carte/carte.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-recherche',
  standalone: true,
  imports: [CommonModule, CarteComponent, NavbarComponent],
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RechercheComponent {
  private carteService = inject(CarteService); // Injection propre
  
  termeRecherche = '';
  rechercheActive = false;
  resultats = toSignal(this.carteService.resultatsRecherche$, { initialValue: [] });

  async rechercherCartes(searchTerm: string) {
    this.termeRecherche = searchTerm;
  
    if (!searchTerm.trim()) {
      this.rechercheActive = false;
      await this.carteService.chargerCartesDepuisBackend();
      this.carteService.afficherToutesCartes();
      return;
    }
    
  
    this.rechercheActive = true;
    await this.carteService.rechercherCartes(searchTerm);
  }
  
}