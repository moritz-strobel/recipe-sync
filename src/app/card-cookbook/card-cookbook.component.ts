import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { CookBook } from '../custom-types/cookbook.type';

@Component({
  selector: 'app-card-cookbook',
  imports: [
    MatCardModule,
  ],
  templateUrl: './card-cookbook.component.html',
  styleUrl: './card-cookbook.component.scss'
})

export class CardCookbookComponent {
   @Input({ alias: "cookbook", required: true }) cookbook!: CookBook;
}
