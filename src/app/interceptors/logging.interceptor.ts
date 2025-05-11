import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`[${new Date().toISOString()}] Requête vers: ${req.method} ${req.url}`);
  return next(req).pipe(
    tap({
      next: (event) => console.log(`[${new Date().toISOString()}] Réponse de: ${req.url}`, event),
      error: (err) => console.error(`[${new Date().toISOString()}] Erreur sur: ${req.url}`, err)
    })
  );
};