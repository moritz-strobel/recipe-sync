import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardCookbookComponent } from '../card-cookbook/card-cookbook.component';

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
    @Input({alias: "heading", required: false}) heading!: string;
    @Input({alias: "cookbooks", required: true}) cookbooks!: CookBook[];

    constructor() {
    }

    @ViewChild('cardContainer') cardContainer!: ElementRef;

    scrollLeft(): void {
        this.cardContainer.nativeElement.scrollBy({
            left: -300, // Adjust this value as needed
            behavior: 'smooth'
        });
    }

    scrollRight(): void {
        this.cardContainer.nativeElement.scrollBy({
            left: 300, // Adjust this value as needed
            behavior: 'smooth'
        });
    }
}
