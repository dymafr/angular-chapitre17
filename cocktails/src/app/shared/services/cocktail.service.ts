import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import {BehaviorSubject, Observable} from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import {HttpClient} from "@angular/common/http";
import {filter, map} from "rxjs/operators";

@Injectable()
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null)

  constructor(private http: HttpClient) {
    this.cocktailsInit();
  }

  cocktailsInit(): void{
    this.http.get('https://cocktails-63318.firebaseio.com/cocktails.json')
      .subscribe( (cocktails: Cocktail[]) => {
        this.cocktails.next(cocktails);
      })
  }

  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
            filter( cocktails => cocktails != null ),
			      map( cocktails => cocktails[index]))
  }

  addCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    cocktails.push(new Cocktail(cocktail.name, cocktail.img, cocktail.desc, cocktail.ingredients.map( ingredient => new Ingredient(ingredient.name, ingredient.quantity) ) ))
    this.cocktails.next(cocktails);
  }

  editCocktail(editCocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    const index = cocktails.map( c => c.name ).indexOf(editCocktail.name);
    cocktails[index] = editCocktail;
    this.cocktails.next(cocktails);
    this.save();
  }

  save(): void{
    this.http.put('https://cocktails-63318.firebaseio.com/cocktails.json', this.cocktails.value).subscribe( res => console.log(res));
  }

}
