import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CardsCookbookContainerComponent } from '../../cards-cookbook-container/cards-cookbook-container.component';
import { CookBook } from '../../custom-types/cookbook.type';
import { ReadService } from '../../rest-services/read.service';

@Component({
  selector: 'app-cookbook-home',
  imports: [
    CommonModule,
    CardsCookbookContainerComponent
],
  templateUrl: './cookbook-home.component.html',
  styleUrl: './cookbook-home.component.scss'
})

export class CookbookHomeComponent {
    cookbooks$: Observable<CookBook[]>;
  
    constructor(private readonly readService: ReadService){
      this.cookbooks$ = this.readService.readReadCookbooks();
    }
}
