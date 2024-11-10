import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-text',
  templateUrl: './highlight-text.component.html',
  styleUrls: ['./highlight-text.component.scss']
})
export class HighlightTextComponent implements OnInit {
  searchText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
