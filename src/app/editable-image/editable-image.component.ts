import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editable-image',
  imports: [],
  templateUrl: './editable-image.component.html',
  styleUrl: './editable-image.component.scss'
})
export class EditableImageComponent {
  @Input() src?: string;
  @Input() alt?: string;

  constructor() { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input?.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.src = reader.result as string; // Convert file to base64 string
        console.log('Profile image updated:', this.src);
      };

      reader.readAsDataURL(file); // Convert the image to Base64
    }
  }

  onEdit() {
    const fileInput = document.createElement('input'); // Dynamically create an <input type="file">
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Ensure only image files can be selected

    fileInput.addEventListener('change', (event: Event) => {
      this.onFileSelected(event); // Delegate to the onFileSelected method
    });

    fileInput.click(); // Trigger the file picker dialog
  }
}
