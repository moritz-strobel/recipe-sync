import { Component, Input } from '@angular/core';
import { Recipe } from '../custom-types/recipe.type';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-recipe-v3',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './card-recipe-v3.component.html',
  styleUrl: './card-recipe-v3.component.scss'
})
export class CardRecipeV3Component {
  @Input({ alias: "recipe", required: true }) recipe!: Recipe;

     // Getter for tags, converting string to array if needed
     get tags(): string[] {
      if (typeof this.recipe.tags === 'string') {
        return (this.recipe.tags as string).split(',').map(tag => tag.trim());
      }
      return this.recipe.tags as string[];
    }
  
    // Getter for ingredients, converting string to array if needed
    get ingredients(): string[] {
      if (typeof this.recipe.ingredients === 'string') {
        return (this.recipe.ingredients as string).split(',').map(ingredient => ingredient.trim());
      }
      return this.recipe.ingredients as string[];
    }
}
