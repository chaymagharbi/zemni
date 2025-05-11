import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article.interface';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
@Component({
  selector: 'app-modifier-article',
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.scss']
})
export class ModifierArticleComponent {
  article: Article = {
    titre: '',
    imageurl: '',
    datepub: new Date().toISOString().split('T')[0],
    description: ''
  };

  private searchTerms = new Subject<string>();
  errorMessage: string | null = null;
  successMessage: string | null = null;
  isLoading: boolean = false;
  articleFound: boolean = false;

  constructor(private articleService: ArticleService) {
   
  }
  async onSubmit(): Promise<void> {
    if (!this.isFormValid()) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    this.successMessage = null;

    try {
      await this.articleService.modifierArticle(this.article.titre, this.article);
      this.successMessage = 'Article mis à jour avec succès!';
    } catch (error) {
      this.handleSubmitError(error);
    } finally {
      this.isLoading = false;
    }
  }

  private isFormValid(): boolean {
    return !!this.article.titre && 
           !!this.article.description && 
           !!this.article.imageurl && 
           !!this.article.datepub;
  }

  private handleSubmitError(error: unknown): void {
    if (typeof error === 'string') {
      this.errorMessage = error;
    } else if (error instanceof Error) {
      this.errorMessage = error.message;
    } else {
      this.errorMessage = 'Erreur lors de la mise à jour';
    }
  }

  resetForm(): void {
    this.article = {
      titre: '',
      imageurl: '',
      datepub: new Date().toISOString().split('T')[0],
      description: ''
    };
    this.errorMessage = null;
    this.successMessage = null;
    this.articleFound = false;
  }
}