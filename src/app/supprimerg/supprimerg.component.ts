import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carte } from '../models/carte.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarteService } from '../services/carte.service';
@Component({
  selector: 'app-supprimerg',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './supprimerg.component.html',
  styleUrls: ['./supprimerg.component.scss']
})
export class SupprimergComponent implements OnInit {
  carteId: string = '';
  carte: Carte | null = null;
  errorMessage: string = '';

  constructor(private router: Router, private carteService: CarteService) {}

  ngOnInit(): void {}

  onSearch() {
    if (!this.carteId.trim()) {
      this.errorMessage = 'L\'ID est obligatoire.';
      this.carte = null;
      return;
    }

    this.carte = this.carteService.getCarteById(this.carteId.trim());

    if (!this.carte) {
      this.errorMessage = 'Carte non trouvée.';
    } else {
      this.errorMessage = '';
    }
  }

  onConfirmDelete() {
    if (this.carte) {
      this.carteService.deleteCarte(this.carte.id);
      console.log('Carte supprimée :', this.carte);
      this.router.navigate(['/']); 
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
