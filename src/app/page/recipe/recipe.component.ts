import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../custom-types/recipe.type';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
    selector: 'app-recipe',
    imports: [
        CommonModule
    ],
    templateUrl: './recipe.component.html',
    styleUrl: './recipe.component.scss'
})

export class RecipeComponent implements OnInit {
    recipe!: Recipe;

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        let id = this.route.snapshot.queryParamMap.get("id");

        if (id) {
            this.recipeService.getRecipeById(id).subscribe({
                next: result => {
                    console.log(result);
                    this.recipe = result;
                    // this.recipe = result
                },
                error: err => console.log(err)
            });
        }

    }
}
