import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsCookbookContainerComponent } from '../../cards-cookbook-container/cards-cookbook-container.component';

// Type
import { CookBook } from '../../custom-types/cookbook.type';

// Service
import { ReadService } from '../../rest-services/read.service';

@Component({
  selector: 'app-cookbook-home',
  imports: [
    CardsCookbookContainerComponent
  ],
  templateUrl: './cookbook-home.component.html',
  styleUrl: './cookbook-home.component.scss'
})

export class CookbookHomeComponent {
  cookbooks$: Observable<CookBook[]>;

  constructor(private readonly readService: ReadService) {
    this.cookbooks$ = this.readService.readReadCookbooks();
  }
}
