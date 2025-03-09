import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../custom-types/recipe.type';
import { ReadService } from '../../rest-services/read.service';
import { CardRecipeComponent } from '../../card-recipe/card-recipe.component';

@Component({
  selector: 'app-landing',
  imports: [CardRecipeComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  lunchRecipes$: Observable<Recipe[]>;
  breakfastRecipes$: Observable<Recipe[]>;
  dinnerRecipes$: Observable<Recipe[]>;

  constructor(private readonly readService: ReadService) {
    this.lunchRecipes$ = this.readService.readReadRecipes();
    this.breakfastRecipes$ = this.readService.readReadRecipes();
    this.dinnerRecipes$ = this.readService.readReadRecipes();
  }

  scrollLeft(container: HTMLElement): void {
    container.scrollLeft -= 200;
  }

  scrollRight(container: HTMLElement): void {
    container.scrollLeft += 200;
  }
}
