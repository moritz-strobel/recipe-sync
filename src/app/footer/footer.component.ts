import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { IconNameContainerComponent } from '../icon-name-container/icon-name-container.component';

@Component({
  selector: 'app-footer',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    IconNameContainerComponent
],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

}
