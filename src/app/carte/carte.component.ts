import { Component, Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteService } from '../services/carte.service';
import { Carte } from '../models/carte.interface';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-carte',
  imports: [CommonModule, NavbarComponent],
  standalone: true,
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {
  @Input() image!: string;
  @Input() titre!: string;
  @Input() description!: string;
  @Input() adresse!: string;
}
-------------------------
  /* carte.component.ts(fatma)
  import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() description!: string;

  isExpanded = false;
  readonly maxChars = 100; // nombre de caractères avant les "..."

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
*/
