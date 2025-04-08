import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';  // Importer RouterModule
import { appRoutes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),  // Fournir les routes définies dans app.routes.ts
    RouterModule,  // Ajout de RouterModule pour gérer le routage
    provideClientHydration(withEventReplay())
  ]
};
