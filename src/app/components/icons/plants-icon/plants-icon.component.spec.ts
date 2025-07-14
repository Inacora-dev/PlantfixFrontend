import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsIconComponent } from './plants-icon.component';

describe('PlantsIconComponent', () => {
  let component: PlantsIconComponent;
  let fixture: ComponentFixture<PlantsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
