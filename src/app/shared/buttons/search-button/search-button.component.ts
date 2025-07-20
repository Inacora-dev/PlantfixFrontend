import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchIconComponent } from '../../../shared/search/components/search-icon/search-icon.component';

@Component({
  selector: 'app-search-button',
  standalone: true,
  imports: [SearchIconComponent],
  templateUrl: './search-button.component.html',
  styleUrls: []
})
export class SearchButtonComponent {
  @Input() query: string = '';
  @Output() search = new EventEmitter<void>();

  onSearch(): void {
    if (this.query.trim()) {
      this.search.emit();
    }
  }
}
