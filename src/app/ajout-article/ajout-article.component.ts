import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article.interface';

@Component({
  selector: 'app-ajout-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.scss']
})
export class AjoutArticleComponent {
  article: Article = {
    id: undefined, // 'id' est optionnel et peut être omis ou laissé undefined
    titre: '',
    description: '',
    imageurl: '',   // Correspond à 'imageurl' du backend
    datepub: ''     // Correspond à 'datepub' du backend
  };

  successMessage = '';
  errorMessage = '';

  constructor(private articleService: ArticleService, private router: Router) {}

  onCancel() {
    // Réinitialiser le formulaire
    this.article = {
      id: undefined,
      titre: '',
      description: '',
      imageurl: '',
      datepub: ''
    };
    this.errorMessage = '';
    this.successMessage = '';
  }

  async ajouterArticle() {
    if (
      this.article.titre.trim() === '' ||
      this.article.description.trim() === '' ||
      this.article.imageurl.trim() === '' ||
      this.article.datepub.trim() === ''
    ) {
      this.errorMessage = 'Tous les champs doivent être remplis.';
      this.successMessage = '';
      return;
    }

    try {
      await this.articleService.ajouterArticle(this.article);
      this.successMessage = 'Article ajouté avec succès !';
      this.errorMessage = '';
    } catch (error) {
      this.errorMessage = "Erreur lors de l'ajout de l'article.";
      this.successMessage = '';
    }
  }
}
