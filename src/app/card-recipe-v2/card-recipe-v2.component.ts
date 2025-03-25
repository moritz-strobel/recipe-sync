import { Component, Input } from '@angular/core';
import { Recipe } from '../custom-types/recipe.type';

@Component({
  selector: 'app-card-recipe-v2',
  imports: [],
  templateUrl: './card-recipe-v2.component.html',
  styleUrl: './card-recipe-v2.component.scss'
})
export class CardRecipeV2Component {
   @Input({ alias: "recipe", required: true }) recipe!: Recipe;
}
