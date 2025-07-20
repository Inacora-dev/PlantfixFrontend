import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';
import { AddButtonComponent } from '../../shared/buttons/add-button/add-button.component';
import { EditButtonComponent } from '../../shared/buttons/edit-button/edit-button.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../../shared/search/search.component';

@Component({
  selector: 'app-user',
  imports: [RouterModule, AddButtonComponent, FormsModule, EditButtonComponent, SearchComponent],
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent {

  constructor(private userService: UserService) { }

  users: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalItems: number = 0;
  totalPages: number = 0;
  query: string = '';

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers(this.currentPage, this.itemsPerPage).subscribe(response => {
      this.users = response.data;
      this.totalItems = response.total;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadUsers();
  }

  onQueryChange(newQuery: string) {
    this.query = newQuery;
  }

  onSearch() {
    this.currentPage = 1;

    this.userService.searchUsers(this.query).subscribe(results => {
      this.users = results.data;
      this.totalItems = results.total;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
  }
}



