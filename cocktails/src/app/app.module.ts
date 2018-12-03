import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PanierService } from './shared/services/panier.service';
import { AppComponent } from './app.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { AppRouting } from './app.routing';
import { CocktailModule } from './cocktail-container/cocktail.module';
import { SharedModule } from './shared/modules/shared.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    CocktailModule,
    SharedModule
  ],
  providers: [ PanierService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
