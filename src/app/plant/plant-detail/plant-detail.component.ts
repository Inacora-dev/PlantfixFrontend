import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../../plant/services/plant.service';
import { RouterModule } from '@angular/router';
import { CancelButtonComponent } from '../../shared/buttons/cancel-button/cancel-button.component';

@Component({
  selector: 'app-plant-detail',
  standalone: true,
  imports: [RouterModule, CancelButtonComponent],
  templateUrl: './plant-detail.component.html',
  styleUrls: []
})
export class PlantDetailComponent implements OnInit {
  plantID: string | null = null;
  plant: any = null;

  constructor(
    private route: ActivatedRoute,
    private plantService: PlantService
  ) {}

  ngOnInit() {
    this.plantID = this.route.snapshot.paramMap.get('id');
    if (this.plantID) {
      this.plantService.getPlant(this.plantID).subscribe(data => {
        this.plant = data;
      });
    }
  }
}

