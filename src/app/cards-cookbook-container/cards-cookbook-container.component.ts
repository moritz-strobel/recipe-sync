import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
}