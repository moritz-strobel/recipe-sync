import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-container',
  imports: [],
  templateUrl: './search-result-container.component.html',
  styleUrl: './search-result-container.component.scss'
})

export class SearchResultContainerComponent implements OnInit {
  ngOnInit(): void {
    console.log("test query") 
  }
}
