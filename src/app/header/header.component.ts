// header.component.ts
import { Component } from '@angular/core';
import { SearchbarComponent } from "../searchbar/searchbar.component";

@Component({
  selector: 'app-header',
  imports: [SearchbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}