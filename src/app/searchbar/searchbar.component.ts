import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [
    FormsModule,
  ],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})

export class SearchbarComponent {
  searchCategories: string[] = ['Recipe', 'User', 'Cookbook']; // Dropdown options
  selectedCategory: string = this.searchCategories[0]; // Default category
  searchQuery: string = ''; // Input query

  onSearch(): void {
    console.log(`Searching for '${this.searchQuery}' in '${this.selectedCategory}' category.`);
    // Implement your search logic here
  }
}
