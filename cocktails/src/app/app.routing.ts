import { Route, RouterModule } from '@angular/router';

const APP_ROUTE: Route[] = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'panier', loadChildren: () => import('app/panier/panier.module').then(m => m.PanierModule) },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE, { relativeLinkResolution: 'legacy' });
