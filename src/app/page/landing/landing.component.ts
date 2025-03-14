import { Component } from '@angular/core';
import { CardsRecipeContainerComponent } from '../../cards-recipe-container/cards-recipe-container.component';

// Type
import { Recipe } from '../../custom-types/recipe.type';
import { RecipeService } from '../../services/recipe.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-landing',
    imports: [
        CardsRecipeContainerComponent,
        AsyncPipe
    ],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})

export class LandingComponent {
    recipe$ : Observable<Recipe>;
    recipes: Recipe[] = [];

    constructor(private readonly recipeService: RecipeService) {
        this.recipe$ = this.recipeService.getRecipeById("1")
    }
}
