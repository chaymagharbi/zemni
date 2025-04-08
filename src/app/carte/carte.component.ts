import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carte',
  imports: [CommonModule],
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
