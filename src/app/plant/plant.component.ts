import { Component } from '@angular/core';
import { PlantService } from '../plant/services/plant.service';
import { AddButtonComponent } from '../shared/buttons/add-button/add-button.component';
import { ShowButtonComponent } from '../shared/buttons/show-button/show-button.component';
import { EditButtonComponent } from '../shared/buttons/edit-button/edit-button.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../shared/search/search.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-plant',
  imports: [RouterModule, AddButtonComponent, ShowButtonComponent, EditButtonComponent, FormsModule, SearchComponent],
  templateUrl: './plant.component.html',
  styleUrls: []
})
export class PlantComponent {

  constructor(private plantService: PlantService, private route: ActivatedRoute) { }

  plants: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 8;
  totalItems: number = 0;
  totalPages: number = 0;
  query: string = '';
  plantFamilies: any[] = [];

  ngOnInit() {
    this.plantService.getPlants().subscribe(response => {
      this.plants = response.data;

      const familyMap = new Map();

      this.plantFamilies = this.plants
        .map(p => p.plant_family)
        .filter(family => {
          if (!familyMap.has(family.id)) {
            familyMap.set(family.id, true);
            return true;
          }
          return false;
        });

      this.loadPlants();
    });
  }

  loadPlants(): void {
    this.plantService.getPlants(this.currentPage, this.itemsPerPage).subscribe(response => {
      this.plants = response.data;
      this.totalItems = response.total;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });

  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadPlants();
  }

  onQueryChange(newQuery: string) {
    this.query = newQuery;
  }

  onSearch() {
    this.currentPage = 1;
    this.plantService.searchPlants(this.query).subscribe(results => {
      this.plants = results.data;
      this.totalItems = results.total;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    });
  }
}
