import { Component, Input } from '@angular/core';
import { CookBook } from '../custom-types/cookbook.type';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-cookbook',
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './card-cookbook.component.html',
  styleUrl: './card-cookbook.component.scss'
})
export class CardCookbookComponent {
  @Input({ alias: "cookbook", required: true }) cookbook!: CookBook;

  constructor() { }
}