import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SearchbarComponent } from "../../searchbar/searchbar.component";
import { CardRecipeV2Component } from '../../card-recipe-v2/card-recipe-v2.component';

import { Recipe } from '../../custom-types/recipe.type';

@Component({
    selector: 'app-landing',
    imports: [
        CardRecipeV2Component,
        SearchbarComponent
    ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})

export class LandingComponent {
    recipe$: Observable<Recipe>;
    recipes: Recipe[] = [];

    constructor(private readonly recipeService: RecipeService) {
        this.recipe$ = this.recipeService.getRecipeById("1")
    }
}
