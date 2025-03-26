import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CookbookService, RecipeService } from '../services';
import { UserService } from '../services/user/user.service';
import { map } from 'rxjs';
import { CookBook } from '../custom-types/cookbook.type';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-quick-access',
    imports: [
        RouterLink,
        NgForOf
    ],
    templateUrl: './quick-access.component.html',
    styleUrl: './quick-access.component.scss'
})
export class QuickAccessComponent {
    cookbooks: CookBook[] = [];

    constructor(private recipeService: RecipeService, private cookbookService: CookbookService, protected router: Router, private route: ActivatedRoute, private userService: UserService) {

    }

    onClick(menu: HTMLElement) {
        const navMenuStyle = menu.style;
        navMenuStyle.display = navMenuStyle.display === 'flex' ? 'none' : 'flex';
        this.getCookbooks();
    }

    onLike() {
        this.route.queryParamMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                const userId = localStorage.getItem('userID')!;
                this.cookbookService.getByUserId(userId)
                    .pipe(map(cookbooks => cookbooks.find(cookbook => cookbook.title === 'Favorites')))
                    .subscribe((cookbook) => {
                        this.cookbookService.addRecipe(cookbook!.id, Number(userId), id!)
                    });
            }
        });
    }

    onSave(cookbook: CookBook) {
        this.route.queryParamMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.cookbookService.addRecipe(cookbook.id, Number(localStorage.getItem("userID")), id!);
            }
        });
    }

    getCookbooks() {
        return this.cookbookService.getByUserId(localStorage.getItem('userID')!).subscribe(
            cookbooks => this.cookbooks = cookbooks
        );
    }
}
