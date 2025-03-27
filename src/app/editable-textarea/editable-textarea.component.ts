import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editable-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editable-textarea.component.html',
  styleUrl: 'editable-textarea.component.scss'
})
export class EditableTextareaComponent {
  @Input() heading: string = '';
  @Input() text: string = '';
  @Input() defaultText: string = 'Add a bio';
  @Output() textChange = new EventEmitter<string>();
  @ViewChild('editableTextarea') textareaElement!: ElementRef<HTMLTextAreaElement>;

  editing: boolean = false;

  startEdit() {
    this.editing = true;
    setTimeout(() => this.focusInput(), 0); // Focus after rendering
  }

  save(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    this.text = textarea.value.trim();
    this.editing = false;
    this.textChange.emit(this.text);
  }

  focusInput() {
    if(this.textareaElement.nativeElement){
      this.textareaElement.nativeElement.focus();
    }
  }
}