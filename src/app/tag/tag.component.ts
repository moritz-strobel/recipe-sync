import { Component, Input, input } from '@angular/core';

import { Tag } from '../custom-types/tag.type';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})

export class TagComponent {
 @Input() tag!: Tag;
}
