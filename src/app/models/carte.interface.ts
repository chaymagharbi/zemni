export interface Carte {
  id?: number;
  nom: string;
  description: string;
  adresse: string;
  imageurl: string;
  categorie: 'gastronomie' | 'vetements' | 'restauration' | 'patrimoine';
  prix?: number;
}
