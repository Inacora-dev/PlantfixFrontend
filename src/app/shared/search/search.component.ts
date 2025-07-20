import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchButtonComponent } from '../buttons/search-button/search-button.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchInputComponent, SearchButtonComponent],
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent {
  @Input() query: string = '';
  @Output() queryChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<void>();

  emitSearch() {
    this.search.emit();
  }

  emitQueryChange(value: string) {
    this.queryChange.emit(value);
  }
}
