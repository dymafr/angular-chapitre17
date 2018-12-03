import { RouterModule, Route } from '@angular/router';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';

const COCKTAIL_ROUTES: Route[] = [
  { path: 'cocktails', component: CocktailContainerComponent, children: [
   {path: 'new', component: CocktailEditComponent },
   {path: ':index/edit', component: CocktailEditComponent },
   {path: ':index', component: CocktailDetailsComponent },
   {path: '', component: CocktailDetailsComponent }
  ]}
]

export const cocktailRouting = RouterModule.forChild(COCKTAIL_ROUTES) 