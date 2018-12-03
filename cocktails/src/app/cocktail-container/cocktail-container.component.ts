import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css'],
  providers: [CocktailService]
})
export class CocktailContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
