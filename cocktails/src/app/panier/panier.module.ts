import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { panierRouting } from './panier.routing';

@NgModule({
  imports: [
    CommonModule,
    panierRouting
  ],
  declarations: [PanierComponent,IngredientsListComponent]
})
export class PanierModule { }
