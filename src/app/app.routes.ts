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
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { Gastronomie1Component } from './gastronomie1/gastronomie1.component';
import { Gastronomie2Component } from './gastronomie2/gastronomie2.component';
import { Gastronomie3Component } from './gastronomie3/gastronomie3.component';
import { Vetement1Component } from './vetement1/vetement1.component';
import { Vetement2Component } from './vetement2/vetement2.component';
import { Vetement3Component } from './vetement3/vetement3.component';
import { RechercheComponent } from './recherche/recherche.component';
=======
/*import { AppComponent } from './app.component';*/-->fatma
>>>>>>> 9c1e25bd0281bfd36a5ead7998f516f74b966081
export const appRoutes: Routes = [
 { path: '', component: AppComponent },
  {path: 'ajouter', component: AjouterComponent },
  {path: 'supprimer', component: SupprimerComponent },
  { path: 'modifier', component: ModifierComponent },
  { path: 'patrimoine1', component: Patrimoine1Component },
  { path: 'patrimoine2', component: Patrimoine2Component },
  { path: 'patrimoine3', component: Patrimoine3Component },
  { path: 'restoration1', component: Restoration1Component },
  { path: 'restoration2', component: Restoration2Component },
  { path: 'restoration3', component: Restoration3Component },
  {path:'gastronomie1', component: Gastronomie1Component},
  {path:'gastronomie2', component: Gastronomie2Component},
  {path:'gastronomie3', component: Gastronomie3Component},
  {path:'vetement1', component: Vetement1Component},
  {path:'vetement2', component: Vetement2Component},
  {path:'vetement3', component: Vetement3Component},
  {path: 'recherche',loadComponent: () => import('./recherche/recherche.component').then(m => m.RechercheComponent)},
  {path: 'patrimoine3',component: Patrimoine3Component,runGuardsAndResolvers: 'always'
  }  
];
