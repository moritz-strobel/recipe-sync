import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-v2',
  imports: [
    CommonModule
  ],
  templateUrl: './header-v2.component.html',
  styleUrl: './header-v2.component.scss'
})
export class HeaderV2Component {
  is_user_logged_in: Boolean = false;

  ngOnInit() {
    this.is_user_logged_in = localStorage.getItem("userID") ? true : false;
  }

  onCheckboxChange() {
    this.is_user_logged_in = localStorage.getItem("userID") ? true : false;
    console.log(this.is_user_logged_in);
  }
}
