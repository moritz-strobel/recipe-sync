import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CardCookbookComponent } from '../card-cookbook/card-cookbook.component';

// Services
import { ReadService } from '../rest-services/read.service';
import { OtherService	 } from '../rest-services/other.service';

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

  /*
  @Input() cookbooks$!: Observable<
    {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      user: { id: string; name: string };
      title: string;
      isFavorite: boolean;
      isDeleteable: boolean;
      isPublic: boolean;
      description: string;
      coverImage: string;
      recipes: { id: string; name: string }[];
    }[]
  >;*/

  @ViewChild('cardContainer') cardContainer!: ElementRef;

  scrollLeft() {
    this.cardContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.cardContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  trackByCookbookId(index: number, cookbook: { id: string }): string {
    return cookbook.id;
  }
}