import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Article } from '../models/article.interface';
import { lastValueFrom } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class ArticleService {
  private http = inject(HttpClient);
  private _articles = signal<Article[]>([]);
  articles = this._articles.asReadonly();
  articles$ = toObservable(this.articles);

  private getUrl(endpoint: string): string {
    return `${environment.apiUrl}${endpoint}`;
  }

  async chargerArticles() {
    try {
      const data = await lastValueFrom(this.http.get<Article[]>(this.getUrl('/articles')));
      this._articles.set(data);
    } catch (error) {
      console.error("Erreur lors du chargement des articles", error);
    }
  }
  async ajouterArticle(article: {
    titre: string;
    imageurl: string;
    description: string;
    datepub: string;
  }): Promise<void> {
    try {
      const body = {
        titre: article.titre,
        imageurl: article.imageurl,
        description: article.description,
        datepub: article.datepub
      };
  
      await lastValueFrom(this.http.post(this.getUrl('/articles'), body));
      console.log("Article envoyé au backend avec succès.");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
      throw error;
    }
  }
  async supprimerArticleParNom(titre: string): Promise<void> {
    try {
      await lastValueFrom(this.http.delete(this.getUrl(`/articles/${titre}`)));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article :", error);
      throw error;
    }
  }

  async modifierArticle(
    titreOriginal: string,
    modifications: Partial<Article>
  ): Promise<Article> {
    try {
      return await lastValueFrom(
        this.http.put<Article>(
          this.getUrl(`/article/${encodeURIComponent(titreOriginal)}`),
          modifications
        )
      );
    } catch (error) {
      console.error("Erreur lors de la modification de l'article", error);
      throw new Error("Échec de la modification");
    }
  }
}

  
