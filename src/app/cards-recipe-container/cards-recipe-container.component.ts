import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CardRecipeComponent } from '../card-recipe/card-recipe.component';

// Services
import { ReadService } from '../rest-services/read.service';

// Types
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
  recipes$: Observable<Recipe[]>;

  constructor(private readonly readService: ReadService){
    this.recipes$ = this.readService.readReadRecipes();
  }

  @ViewChild('cardContainer') cardContainer!: ElementRef;

  scrollLeft() {
    this.cardContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.cardContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
