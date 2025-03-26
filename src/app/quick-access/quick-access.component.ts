import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CookbookService } from '../services';
import { map } from 'rxjs';
import { CookBook } from '../custom-types/cookbook.type';
import { NgForOf, NgIf } from '@angular/common';

@Component({
    selector: 'app-quick-access',
    imports: [
        RouterLink,
        NgForOf,
        NgIf
    ],
    templateUrl: './quick-access.component.html',
    styleUrl: './quick-access.component.scss'
})
export class QuickAccessComponent {
    cookbooks: CookBook[] = [];

    constructor(private cookbookService: CookbookService, protected router: Router, private route: ActivatedRoute) {

    }

    onClick(menu: HTMLElement) {
        const navMenuStyle = menu.style;
        navMenuStyle.display = navMenuStyle.display === 'flex' ? 'none' : 'flex';
        this.getCookbooks();
    }

    onLike(likeIcon: HTMLElement) {
        this.route.queryParamMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                const userId = localStorage.getItem('userID')!;
                this.cookbookService.getByUserId(userId)
                    .pipe(map(cookbooks => cookbooks.find(cookbook => cookbook.title === 'Favorites')))
                    .subscribe((cookbook) => {
                        this.cookbookService.addRecipe(cookbook!.id, Number(userId), id!).subscribe(
                            () => {
                                likeIcon.classList.remove('fa-thumbs-up');
                                likeIcon.classList.add('fa-check');
                            }
                        )
                    });
            }
        });
    }

    onSave(saveIcon: HTMLElement, cookbook: CookBook) {
        this.route.queryParamMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.cookbookService.addRecipe(cookbook.id, Number(localStorage.getItem("userID")), id!).subscribe(
                    () => {
                        saveIcon.classList.remove('fa-bookmark');
                        saveIcon.classList.add('fa-check');
                        setTimeout(() => {
                            saveIcon.classList.add('fa-bookmark')
                            saveIcon.classList.remove('fa-check')
                        }, 1000);
                    }
                );
            }
        });
    }

    getCookbooks() {
        return this.cookbookService.getByUserId(localStorage.getItem('userID')!)
            .pipe(map(cookbooks => cookbooks.filter(cookbook => cookbook.title !== 'Favorites')))
            .subscribe(cookbooks => this.cookbooks = cookbooks
            );
    }
}
