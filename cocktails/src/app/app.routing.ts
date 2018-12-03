import { Route, RouterModule } from '@angular/router';

const APP_ROUTE: Route[] = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'panier', loadChildren: 'app/panier/panier.module#PanierModule' },
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);
