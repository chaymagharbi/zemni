import { RenderMode, ServerRoute } from '@angular/ssr';
import { Routes, RouterModule } from '@angular/router';

// Déclare tes routes pour SSR (Server-Side Rendering)
const routes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender  // Cette option fonctionne avec SSR, pas avec des routes classiques
  }
];

// Exporte tes routes pour SSR
export const serverRoutes: ServerRoute[] = routes;

// Ajoute RouterModule pour ton app Angular classique
RouterModule.forRoot(routes, {
  onSameUrlNavigation: 'reload'  // Permet de recharger même si c'est la même URL
});
