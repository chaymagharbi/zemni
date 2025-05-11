import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../services/article.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavbarComponent } from '../navbar/navbar.component';
import { format } from 'date-fns';
import { ImgprComponent } from "../imgpr/imgpr.component";
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ImgprComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  private articleService = inject(ArticleService);
  articles = toSignal(this.articleService.articles$, { initialValue: [] });
  formatDate(date: string): string {
    return format(new Date(date), 'dd/MM/yyyy');  
  }
  async ngOnInit() {
    await this.articleService.chargerArticles();
  }
  adminMode = false;
constructor(private router: Router) {}
toggleAdminMode() {
  this.adminMode = !this.adminMode;
}

ajouter() {
  this.router.navigate(['/ajouter-article']);
}

modifier() {
  this.router.navigate(['/modifier-article']);
}

supprimer() {
  this.router.navigate(['/supprimer-article']);
}

}
