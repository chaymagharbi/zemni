import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss'] // ou .css selon ce que tu utilises
})
export class CarteComponent {
  // Inputs reçus du parent
  @Input() image!: string;
  @Input() titre!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() adresse!: string;


  // État pour l'affichage de la description complète ou tronquée
  isExpanded = false;
  readonly maxChars = 100; // Nombre max de caractères avant "..."

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
