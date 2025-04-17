import { Component,CUSTOM_ELEMENTS_SCHEMA,OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { filter } from 'rxjs/operators';
import { ImgprComponent } from '../imgpr/imgpr.component';
import { CarteComponent } from '../carte/carte.component';
import { CommonModule } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ])
  ],
  
})
export class AproposComponent implements OnInit {
  isAdminPage = false;
  isRecherchePage = false;
  adminMode = false;
  images: string[] = Array.from({ length: 14 }, (_, i) => `/assets/p${i + 1}.jpg`);
  currentImageIndex = 0;
  currentImage = this.images[0];

  ngOnInit(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    }, 1500); // change every 3 seconds
  }



}
