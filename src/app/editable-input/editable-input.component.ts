import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editable-input',
  imports: [
    CommonModule
  ],
  templateUrl: './editable-input.component.html',
  styleUrl: './editable-input.component.scss'
})

export class EditableInputComponent {
  @Input({ alias: 'heading', required: false }) heading!: string;
  @Input() text: string = '';
  @Input() defaultText: string = 'Enter text here';
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('editableInput') inputElement!: ElementRef;

  editing: boolean = false;

  startProfileEdit() {
    this.editing = true;
    setTimeout(() => this.focusInput(), 0); // Focus after rendering
  }

  updateProfileField(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.text = input.value;
    }
  }

  saveProfileField(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.text = input.value.trim();
      this.editing = false;
      this.textChange.emit(this.text);
    }
  }

  finishProfileEdit(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.text = input.value.trim();
      this.editing = false;
      this.textChange.emit(this.text);
    }
  }

  focusInput() {
    this.inputElement.nativeElement.focus();
  }
}

/*
export class EditableInputComponent {
  @Input({alias: "heading", required: false}) heading!: string;
  @Input() text: string = ''; // Initial text for the label
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('editable-input') inputElement!: ElementRef;

  focusInput() {
    this.inputElement.nativeElement.focus();
  }

  editing: boolean = false; // Tracks whether the input is being edited
  showEditIcon: boolean = false; // Tracks whether the edit icon should be shown

  onEdit() {
    this.editing = true; // Switch to editing mode
    this.showEditIcon = false; // Hide the icon while editing
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement; // Cast EventTarget to HTMLInputElement
    if (input) {
      this.text = input.value; // Safely access the value property
    }
  }
  
  onSave(event: Event) {
    const input = event.target as HTMLInputElement; // Typecast to HTMLInputElement
    if (input) {
      this.text = input.value.trim(); // Safely access the value property and trim it
      this.editing = false; // Exit editing mode
      this.textChange.emit(this.text); // Emit the updated text
    }
  }
  
  onBlur(event: FocusEvent) {
    const input = event.target as HTMLInputElement; // Typecast to HTMLInputElement
    if (input) {
      this.text = input.value.trim(); // Safely access and update the text
      this.editing = false; // Exit editing mode
      this.textChange.emit(this.text); // Emit the updated text
    }
  }
  
}
*/