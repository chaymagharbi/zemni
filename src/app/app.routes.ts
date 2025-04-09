import { Routes } from '@angular/router';
import { Patrimoine1Component } from './patrimoine1/patrimoine1.component';
import { Patrimoine2Component } from './patrimoine2/patrimoine2.component';
import { Patrimoine3Component } from './patrimoine3/patrimoine3.component';
import { Restoration1Component } from './restoration1/restoration1.component';
import { Restoration2Component } from './restoration2/restoration2.component';
import { Restoration3Component } from './restoration3/restoration3.component';
import { ModifierComponent } from './modifier/modifier.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { AjouterComponent } from './ajouter/ajouter.component';
export const appRoutes: Routes = [
  {path: 'ajouter', component: AjouterComponent },
  {path: 'supprimer', component: SupprimerComponent },
  { path: 'modifier', component: ModifierComponent },
  { path: '', component: Patrimoine1Component },
  { path: 'patrimoine1', component: Patrimoine1Component },
  { path: 'patrimoine2', component: Patrimoine2Component },
  { path: 'patrimoine3', component: Patrimoine3Component },
  { path: 'restoration1', component: Restoration1Component },
  { path: 'restoration2', component: Restoration2Component },
  { path: 'restoration3', component: Restoration3Component },
  {path: 'recherche',loadComponent: () => import('./recherche/recherche.component').then(m => m.RechercheComponent)},
  {path: 'patrimoine3',component: Patrimoine3Component,runGuardsAndResolvers: 'always'
  }  
];
