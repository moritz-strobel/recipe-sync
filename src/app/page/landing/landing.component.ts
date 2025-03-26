import { Component } from '@angular/core';
import { RecipeService } from '../../services/';
import { SearchbarComponent } from "../../searchbar/searchbar.component";
import { CardRecipeV2Component } from '../../card-recipe-v2/card-recipe-v2.component';

import { Recipe } from '../../custom-types/recipe.type';
import { CardRecipeV3Component } from "../../card-recipe-v3/card-recipe-v3.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-landing',
    imports: [
        CardRecipeV2Component,
        SearchbarComponent,
        CardRecipeV3Component,
        NgIf
    ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})

export class LandingComponent {
    recipes!: Recipe[];

    constructor(private readonly recipeService: RecipeService) {
        recipeService.getAllRecipes().subscribe(
            {
              next: (recipes) => this.recipes = recipes,
              error: (error) => console.log(error)
            }
          );
    }
}
