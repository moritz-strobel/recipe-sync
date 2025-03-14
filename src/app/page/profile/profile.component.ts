import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageEditableComponent } from "../../image-editable/image-editable.component";
import { EditableImageComponent } from "../../editable-image/editable-image.component";

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    FormsModule,
    ImageEditableComponent,
    EditableImageComponent
],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
@ViewChild("#profileImage") profileImage!: ImageEditableComponent;

  canSave: boolean = false;

  user = {
    id: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    profileText: '',
    profileImage: '' // Base64 string representation of the image
  };

  showSaveBtn() {
    this.canSave = true;
  }

  saveChanges() {
    this.canSave = false;
    // Add logic to save the user data to backend
  }
}