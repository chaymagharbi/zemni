import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-supprimer-article',
  imports: [CommonModule, FormsModule],
  templateUrl: './supprimer-article.component.html',
  styleUrl: './supprimer-article.component.scss'
})
export class SupprimerArticleComponent {
  titre: string = '';
  message: string = '';

  constructor(private articleService: ArticleService) {}

  async supprimerArticle() {
    if (!this.titre) {
      this.message = "❗Veuillez renseigner le titre de l'article.";
      return;
    }

    try {
      await this.articleService.supprimerArticleParNom(this.titre);
      this.message = "✅ Article supprimé avec succès.";
      this.titre = ''; // Réinitialiser le champ
    } catch (error) {
      this.message = "❌ Erreur lors de la suppression. L'article n'existe peut-être pas.";
    }
  }

  fermer() {
    console.log("Fermeture (à implémenter si besoin)");
  }

}
