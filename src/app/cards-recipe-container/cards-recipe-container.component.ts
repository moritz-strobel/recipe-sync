import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRecipeComponent } from '../card-recipe/card-recipe.component';
import { Recipe } from '../custom-types/recipe.type';

@Component({
  selector: 'app-cards-recipe-container',
  imports: [
    CommonModule,
    CardRecipeComponent
  ],
  templateUrl: './cards-recipe-container.component.html',
  styleUrl: './cards-recipe-container.component.scss'
})
export class CardsRecipeContainerComponent {
  @Input({ alias: "heading", required: false }) heading!: string;
  @Input({ alias: "recipes", required: true }) recipes!: Recipe[];

  constructor() {}
}