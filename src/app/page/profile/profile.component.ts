import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
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
import { EditableTextareaComponent } from '../../editable-textarea/editable-textarea.component';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    ReactiveFormsModule, // Added for reactive forms
    EditableImageComponent,
    EditableInputComponent,
    CardsCookbookContainerComponent,
    CardsRecipeContainerComponent,
    EditableTextareaComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  @ViewChild("profileImage") profileImage!: EditableImageComponent;

  user!: User;
  ownRecipes!: Recipe[];
  owncookBooks!: CookBook[];
  savedCookbooks!: CookBook[];
  profileForm: FormGroup;

  constructor(
    private cookbookService: CookbookService,
    private recipeService: RecipeService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      profileImage: '',
      profileText: ''
    });

    const temp = localStorage.getItem("userID");
    if (temp) {
      this.userService.getById(temp).subscribe({
        next: (user) => {
          this.user = user;
          this.profileForm.patchValue({
            username: user.username,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            password: user.password,
            profileImage: user.profileImage,
            profileText: user.profileText
          });
        },
        error: (error) => console.log(error)
      });

      this.recipeService.getByUser(temp).subscribe({
        next: (recipes) => this.ownRecipes = recipes,
        error: (error) => console.log(error)
      });

      this.cookbookService.getByUserId(temp).subscribe({
        next: (cookbooks) => this.owncookBooks = cookbooks,
        error: (error) => console.log(error)
      });

      this.cookbookService.getByUserId(temp).subscribe({
        next: (cookbooks) => this.savedCookbooks = cookbooks,
        error: (error) => console.log(error)
      });
    }
  }

  ngOnInit(): void { }

  onImageChange(base64String: string) {
    this.profileForm.patchValue({ profileImage: base64String });
    this.onSubmit();
  }

  onTextChange(field: string, value: string) {
    this.profileForm.patchValue({ [field]: value });
    this.onSubmit();
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formValue = this.profileForm.value;
      const updatedUser = {
        ...this.user,
        username: formValue.username,
        first_name: formValue.firstName,
        last_name: formValue.lastName,
        email: formValue.email,
        password: formValue.password,
        profileImage: formValue.profileImage,
        profileText: formValue.profileText
      };
      const userId = localStorage.getItem("userID")!;

      console.log(userId, updatedUser);

      this.userService.updateById(userId, updatedUser).subscribe({
        next: (result) => console.log('User updated:', result),
        error: (err) => console.error('Error updating user:', err)
      });
    }
  }
}