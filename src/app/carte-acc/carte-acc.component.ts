import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Importer les pipes et directives de base

@Component({
  selector: 'app-carte-acc',
  standalone: true, // ✅ N'oublie pas si tu es en standalone
  imports: [CommonModule], // ✅ Ajouter ici
  templateUrl: './carte-acc.component.html',
  styleUrl: './carte-acc.component.scss'
})
export class CarteAccComponent {
  @Input() titre!: string;
  @Input() subtitle!: string;
  @Input() description!: string;
  @Input() image!: string;

  constructor(private router: Router) {}

  
  explorer() {
    const cleanedTitre = this.titre?.toLowerCase().replace(/[<:>]/g, '').trim();
  
    switch (cleanedTitre) {
      case 'dmak':
        this.router.navigate(['/gastronomie1']);
        break;
      case 'kachech':
        this.router.navigate(['/vetement1']);
        break;
      case 'kaayda al kif':
        this.router.navigate(['/restoration1']);
        break;
      case 'narjalek dima':
        this.router.navigate(['/patrimoine1']);
        break;
      default:
        console.warn('Aucune route définie pour :', this.titre);
    }
  }
  
}
