import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-editable',
  imports: [],
  templateUrl: './image-editable.component.html',
  styleUrl: './image-editable.component.scss'
})
export class ImageEditableComponent {
  @Input() src?: string;
  @Input() alt?: string;

  constructor(){}
}
