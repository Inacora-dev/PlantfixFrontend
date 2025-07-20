import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ShopFilterButtonComponent } from '../../../../shared/buttons/shop-filter-button/shop-filter-button.component';
import { PlantService } from '../../../../plant/services/plant.service';

interface Plant {
  plant_family: { id: string; name: string };
}

@Component({
  selector: 'app-shop-filter',
  imports: [ShopFilterButtonComponent],
  templateUrl: './shop-filter.component.html',
  styleUrls: []
})

export class ShopFilterComponent implements OnInit {
  plantFamilies: any[] = [];
  plants: Plant[] = [];
  showFilters = false;

  @Output() familyChange = new EventEmitter<string>();
  @Output() sortChange = new EventEmitter<string>();

  sortBy: string = '';
  selectedFamily: string = '';

  constructor(private service: PlantService) { }

  ngOnInit() {
    this.service.getPlants().subscribe(response => {
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
    });
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  onFamilyChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.familyChange.emit(value);
  }

  onSortChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.sortChange.emit(value);
  }
}
