import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  isEditMode: boolean = false;

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

  toggleEditMode() {
    this.isEditMode = true; // Switch to edit mode
  }

  saveChanges() {
    this.isEditMode = false; // Switch back to view mode
    console.log('User data saved:', this.user);
    // Add logic to save the user data to your backend (e.g., via an API call)
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input?.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.user.profileImage = reader.result as string; // Convert file to base64 string
        console.log('Profile image updated:', this.user.profileImage);
      };

      reader.readAsDataURL(file); // Convert the image to Base64
    }
  }
}