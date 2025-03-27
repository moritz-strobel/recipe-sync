import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCookbookComponent } from '../card-cookbook/card-cookbook.component';
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
    @Input({ alias: "heading", required: false }) heading!: string;
    @Input({ alias: "cookbooks", required: true }) cookbooks!: CookBook[];

    constructor() {}
}