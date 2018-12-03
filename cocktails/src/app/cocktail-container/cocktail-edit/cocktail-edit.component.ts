import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CocktailService } from '../../shared/services/cocktail.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  public cocktailForm: FormGroup;
  public cocktail: Cocktail;
  private edit: boolean;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private cocktailService: CocktailService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(( params: Params ) => {
      if (params.index) {
        this.edit = true;
        this.cocktailService.getCocktail(params.index).subscribe( (cocktail: Cocktail) => {
          this.cocktail = cocktail;
          this.initForm(this.cocktail);
        });
      } else {
        this.edit = false;
        this.initForm();
      }
    })
  }

  initForm(cocktail = { name: '', img: '', desc: '', ingredients: []}) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      desc: [cocktail.desc],
      ingredients: this.fb.array(cocktail.ingredients.map( ingredient => this.fb.group({ name: [ingredient.name], quantity: [ingredient.quantity]})))
    })
  }

  addIngredient(): void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.fb.group({
      name: [''],
      quantity: ['']
    }))
  }

  createCocktail() {
    if (this.edit) {
      this.cocktailService.editCocktail(this.cocktailForm.value)
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
  }


}
