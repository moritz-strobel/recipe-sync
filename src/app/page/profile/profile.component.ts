import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditableImageComponent } from "../../editable-image/editable-image.component";
import { CardsCookbookContainerComponent } from "../../cards-cookbook-container/cards-cookbook-container.component";
import { CardsRecipeContainerComponent } from "../../cards-recipe-container/cards-recipe-container.component";
import { EditableInputComponent } from '../../editable-input/editable-input.component';

import { User } from '../../custom-types/user.type';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    FormsModule,
    EditableImageComponent,
    EditableInputComponent
    //CardsCookbookContainerComponent,
    //CardsRecipeContainerComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  @ViewChild("#profileImage") profileImage!: EditableImageComponent;
  @ViewChild("#name") name!: EditableInputComponent;

  user = {
    createdAt: new Date,
    updatedAt: new Date,
    id: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    passwordHash: '',
    profileText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic similique ratione sit expedita eum libero, ipsam adipisci voluptates voluptas voluptate, mollitia nobis quam eos inventore dolorem. Mollitia nam animi similique.',
    profileImage: '', // Base64 string representation of the image
  };
}