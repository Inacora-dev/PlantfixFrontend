import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: []
})
export class SearchInputComponent {
  @Input() query: string = '';
  @Output() queryChange = new EventEmitter<string>();
  @Output() enterPressed = new EventEmitter<void>();

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.queryChange.emit(input.value);
  }

  onEnter(): void {
    this.enterPressed.emit();
  }
}
