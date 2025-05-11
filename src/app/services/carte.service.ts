import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { Carte } from '../models/carte.interface';
import { toObservable } from '@angular/core/rxjs-interop';
@Injectable({
  providedIn: 'root'
})
export class CarteService {
  private http = inject(HttpClient);
  private _cartes = signal<Carte[]>([]);
  private _resultatsRecherche = signal<Carte[]>([]);

  // Conversion du Signal en Observable pour le composant
  resultatsRecherche$ = toObservable(this._resultatsRecherche);
  // Signaux publics en lecture seule
  cartes = this._cartes.asReadonly();
  resultatsRecherche = this._resultatsRecherche.asReadonly();

  private getUrl(endpoint: string): string {
    return `${environment.apiUrl}${endpoint}`;
  }
  afficherToutesCartes() {
    const toutes = this._cartes();
    this._resultatsRecherche.set(toutes);
  }  
  async ajouterCarte(carte: Omit<Carte, 'id'>) {
    try {
      const response = await lastValueFrom(
        this.http.post<{ carte: Carte }>(this.getUrl('/cartes'), carte)
      );
      this._cartes.update(current => [...current, response.carte]);
      return response.carte;
    } catch (err) {
      console.error('Erreur lors de l’ajout de la carte :', err);
      throw err;
    }
  }

  async chargerCartesDepuisBackend() {
    try {
      const toutesCartes = await lastValueFrom(
        this.http.get<Carte[]>(this.getUrl('/cartes'))
      );
      this._cartes.set(toutesCartes);
    } catch (err) {
      console.error("Erreur lors du chargement :", err);
    }
  }

  async rechercherCartes(query: string): Promise<void> {
    if (!query.trim()) {
      this._resultatsRecherche.set([]);
      return;
    }

    try {
      const resultats = await lastValueFrom(
        this.http.get<Carte[]>(this.getUrl(`/rechercher?q=${encodeURIComponent(query)}`))
      );
      this._resultatsRecherche.set(resultats);
    } catch (error) {
      console.error('Erreur recherche :', error);
      this._resultatsRecherche.set([]);
    }
  }

  async chargerCartesParCategorie(categorie: string): Promise<Carte[]> {
    await this.chargerCartesDepuisBackend(); // Rafraîchit les données
    return this._cartes().filter(c => c.categorie === categorie);
  }
  async supprimerCarteParNom(categorie: string, nom: string): Promise<void> {
    try {
      const url = `http://localhost:8000/api/delete/${this.formatCategory(categorie)}/${encodeURIComponent(nom)}`;      
      const response = await lastValueFrom(this.http.delete(url));
      console.log("Réponse:", response);
      
      this._cartes.update(cartes => 
        cartes.filter(c => !(c.nom === nom && c.categorie === categorie))
      );
      this._resultatsRecherche.update(cartes =>
        cartes.filter(c => !(c.nom === nom && c.categorie === categorie))
      );
    } catch (error) {
      console.error("Détails de l'erreur:", error);
      throw error;
    } }
    private formatCategory(cat: string): string {
      // Convertit en PascalCase comme attendu par le backend
      return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
    }
    async modifierCarte(
      categorie: string,
      nomOriginal: string,
      modifications: {
        nom?: string;
        description?: string;
        adresse?: string;
        prix?: number;
        imageurl?: string;
      }
    ): Promise<{ message: string; item: Carte }> {
      try {
        // Préparation des données à envoyer
        const updateData: any = {};
        
        // On ne garde que les champs qui ont été modifiés
        if (modifications.nom !== undefined) updateData.nom = modifications.nom;
        if (modifications.description !== undefined) updateData.description = modifications.description;
        if (modifications.adresse !== undefined) updateData.adresse = modifications.adresse;
        if (modifications.prix !== undefined) updateData.prix = modifications.prix;
        if (modifications.imageurl !== undefined) updateData.imageurl = modifications.imageurl;
  
        const url = `${environment.apiUrl}/modifier/${categorie.toLowerCase()}/${encodeURIComponent(nomOriginal)}`;
        const response = await lastValueFrom(
          this.http.put<{
            message: string;
            item: Carte;
          }>(url, updateData)
        );
  
        // Mise à jour du state local
        this._cartes.update(cartes => 
          cartes.map(c => 
            c.nom === nomOriginal && c.categorie === categorie
              ? { ...c, ...modifications }
              : c
          )
        );
  
        this._resultatsRecherche.update(cartes =>
          cartes.map(c =>
            c.nom === nomOriginal && c.categorie === categorie
              ? { ...c, ...modifications }
              : c
          )
        );
  
        return response;
      } catch (error: any) {
        console.error('Erreur modification carte:', error);
        throw new Error(error.error?.detail || 'Erreur lors de la modification');
      }
    }
  
    /**
     * Récupère une carte par son nom et sa catégorie
     */
    async getCarteParNom(categorie: string, nom: string): Promise<Carte> {
      try {
        const url = `${environment.apiUrl}/${categorie.toLowerCase()}/${encodeURIComponent(nom)}`;
        const response = await lastValueFrom(this.http.get<Carte>(url));
        return response;
      } catch (error: any) {
        if (error.status === 404) {
          throw new Error(`Élément '${nom}' non trouvé dans la catégorie ${categorie}`);
        }
        console.error('Erreur récupération carte:', error);
        throw new Error(error.error?.detail || 'Erreur lors de la récupération de l\'élément');
      }
    }
  }

  