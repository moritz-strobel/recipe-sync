import { Component } from '@angular/core';

@Component({
  selector: 'app-header-v2',
  imports: [],
  templateUrl: './header-v2.component.html',
  styleUrl: './header-v2.component.scss'
})
export class HeaderV2Component {
  menuOpen: boolean = false;
  plusMenuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  togglePlusMenu() {
    this.plusMenuOpen = !this.plusMenuOpen;
  }
}
