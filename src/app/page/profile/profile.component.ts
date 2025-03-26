import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditableImageComponent } from "../../editable-image/editable-image.component";
import { CardsCookbookContainerComponent } from "../../cards-cookbook-container/cards-cookbook-container.component";
import { CardsRecipeContainerComponent } from "../../cards-recipe-container/cards-recipe-container.component";
import { EditableInputComponent } from '../../editable-input/editable-input.component';

import { CookbookService } from '../../services';
import { RecipeService } from '../../services';
import { UserService } from '../../services/user/user.service';
import { User } from '../../custom-types/user.type';
import { Recipe } from '../../custom-types/recipe.type';
import { CookBook } from '../../custom-types/cookbook.type';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    FormsModule,
    EditableImageComponent,
    EditableInputComponent,
    CardsCookbookContainerComponent,
    CardsRecipeContainerComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  @ViewChild("#profileImage") profileImage!: EditableImageComponent;
  @ViewChild("#name") name!: EditableInputComponent;

  user!: User;
  ownRecipes!: Recipe[];
  owncookBooks!: CookBook[];
  savedCookbooks!: CookBook[];

  constructor(private cookbookService: CookbookService, private recipeService: RecipeService, private userService: UserService){
    var temp = localStorage.getItem("userID");

    if(temp){
      userService.getById(temp).subscribe(
        {
          next: (user) => this.user = user,
          error: (error) => console.log(error)
        }
      );

      recipeService.getByUser(temp).subscribe(
        {
          next: (recipes) => this.ownRecipes = recipes,
          error: (error) => console.log(error)
        }
      );

      cookbookService.getByUserId(temp).subscribe(
        {
          next: (cookbooks) => this.owncookBooks = cookbooks,
          error: (error) => console.log(error)
        }
      );

      cookbookService.getUserSaved(temp).subscribe(
        {
          next: (cookbooks) => this.savedCookbooks = cookbooks,
          error: (error) => console.log(error)
        }
      );
    }
  }
}
