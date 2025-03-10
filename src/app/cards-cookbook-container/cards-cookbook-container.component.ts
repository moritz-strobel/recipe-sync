import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CardCookbookComponent } from '../card-cookbook/card-cookbook.component';

// Services
import { ReadService } from '../rest-services/read.service';

// Types
import { CookBook } from '../custom-types/cookbook.type';

@Component({
  selector: 'app-cards-cookbook-container',
  imports: [
    CommonModule,
    CardCookbookComponent,
  ],
  templateUrl: './cards-cookbook-container.component.html',
  styleUrl: './cards-cookbook-container.component.scss'
})

export class CardsCookbookContainerComponent {
  cookbooks$: Observable<CookBook[]>;

  constructor(private readonly readService: ReadService){
    this.cookbooks$ = this.readService.readReadCookbooks();
  }

  @ViewChild('cardContainer') cardContainer!: ElementRef;

  scrollLeft() {
    this.cardContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.cardContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}