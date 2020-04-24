import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html'
})
export class SearchBarComponent {
  @Input() placeholder: string;
  @Output() searchCriteria = new EventEmitter();
  search: string;

  constructor() {
    this.search = '';
  }

  searchThis(): void {
    this.searchCriteria.emit(this.search.toLocaleLowerCase());
  }

}
