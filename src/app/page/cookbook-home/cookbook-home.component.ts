import { Component } from '@angular/core';
import { CardsCookbookContainerComponent } from '../../cards-cookbook-container/cards-cookbook-container.component';

// Type
import { CookBook } from '../../custom-types/cookbook.type';
import { CookbookService } from '../../services/cookbook.service';

@Component({
    selector: 'app-cookbook-home',
    imports: [
        CardsCookbookContainerComponent
    ],
    templateUrl: './cookbook-home.component.html',
    styleUrl: './cookbook-home.component.scss'
})

export class CookbookHomeComponent {
    cookbooks: CookBook[] = [];

    constructor(private readonly cookbookService: CookbookService) {

    }
}
