import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRecipeV2Component } from '../card-recipe-v2/card-recipe-v2.component';
import { CardRecipeV3Component } from '../card-recipe-v3/card-recipe-v3.component';
import { Recipe } from '../custom-types/recipe.type';
import { CardRecipeComponent } from '../card-recipe/card-recipe.component';

@Component({
  selector: 'app-cards-recipe-column',
    imports: [
        CommonModule,
        CardRecipeV2Component,
        CardRecipeV3Component,
        CardRecipeComponent
    ],
  templateUrl: './cards-recipe-column.component.html',
  styleUrl: './cards-recipe-column.component.scss'
})
export class CardsRecipeColumnComponent {
  @Input({ alias: "heading", required: false }) heading!: string;
  @Input({ alias: "recipes", required: true }) recipes!: Recipe[];

  constructor() {}
}
