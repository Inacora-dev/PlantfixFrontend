import { Component } from '@angular/core';
import { OrderService } from '../order/services/order.service';
import { RouterModule } from '@angular/router';
import { EditButtonComponent } from '../shared/buttons/edit-button/edit-button.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../shared/search/search.component';

@Component({
  selector: 'app-order',
  imports: [RouterModule, EditButtonComponent, FormsModule, SearchComponent],
  templateUrl: './order.component.html',
  styleUrls: []
})
export class OrderComponent {
  constructor(private orderService: OrderService) { }

  orders: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalItems: number = 0;
  totalPages: number = 0;
  query: string = '';

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.loadOrders()
    });
  }

  loadOrders(): void {
    this.orderService.getOrders(this.currentPage, this.itemsPerPage).subscribe(response => {
      this.orders = response.data;
      this.totalItems = response.total;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadOrders();
  }

  onQueryChange(newQuery: string) {
    this.query = newQuery;
  }

  onSearch() {
    this.currentPage = 1;
    this.orderService.searchOrders(this.query).subscribe(results => {
      this.orders = results.data;
      this.totalItems = results.total;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
  }
}