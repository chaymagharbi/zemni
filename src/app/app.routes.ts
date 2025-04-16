import { Routes } from '@angular/router';
import { Patrimoine1Component } from './patrimoine1/patrimoine1.component';
import { Restoration1Component } from './restoration1/restoration1.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { HomeComponent } from './home/home.component';
import { Gastronomie1Component } from './gastronomie1/gastronomie1.component';
import { Vetement1Component } from './vetement1/vetement1.component';
import { RechercheComponent } from './recherche/recherche.component';
export const appRoutes: Routes = [
  {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  {path: 'ajouter', component: AjouterComponent },
  {path: 'supprimer', component: SupprimerComponent },
  {path: 'modifier', component: ModifierComponent },
  {path: 'patrimoine1', loadComponent: () => import('./patrimoine1/patrimoine1.component').then(m => m.Patrimoine1Component) },
  {path: 'restoration1',loadComponent: () => import('./restoration1/restoration1.component').then(m => m.Restoration1Component)},
  {path: 'vetement1', loadComponent: () => import('./vetement1/vetement1.component').then(m => m.Vetement1Component)},
  {path:'gastronomie1', loadComponent: () => import('./gastronomie1/gastronomie1.component').then(m => m.Gastronomie1Component)},
  {path: 'recherche',loadComponent: () => import('./recherche/recherche.component').then(m => m.RechercheComponent)},













































];
