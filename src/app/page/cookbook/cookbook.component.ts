import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CookbookService } from '../../services';
import { CookBook } from '../../custom-types/cookbook.type';
import { CardsRecipeColumnComponent } from '../../cards-recipe-column/cards-recipe-column.component';


@Component({
  selector: 'app-cookbook',
  imports: [
    CommonModule,
    CardsRecipeColumnComponent
  ],
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent {
  cookbook!: CookBook;

  constructor(private route: ActivatedRoute, private cookbookService: CookbookService) {}

  ngOnInit(): void {
    let id = this.route.snapshot.queryParamMap.get("id");

    console.log(id)

    if (id) {
      this.cookbookService.getById(id).subscribe({
        next: result => {
          this.cookbook = result;
          console.log(result)
        },
        error: err => console.log(err)
      });
    }
  }
}
