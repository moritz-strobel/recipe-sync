import { Component, Input } from '@angular/core';
import { Recipe } from '../custom-types/recipe.type';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-recipe',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './card-recipe.component.html',
  styleUrl: './card-recipe.component.scss'
})
export class CardRecipeComponent {
  @Input({ alias: "recipe", required: true }) recipe!: Recipe;

  get tags(): string[] {
    if (typeof this.recipe.tags === 'string') {
      return (this.recipe.tags as string).split(',').map(tag => tag.trim());
    }
    return this.recipe.tags as string[];
  }

  get ingredients(): string[] {
    if (typeof this.recipe.ingredients === 'string') {
      return (this.recipe.ingredients as string).split(',').map(ingredient => ingredient.trim());
    }
    return this.recipe.ingredients as string[];
  }
}