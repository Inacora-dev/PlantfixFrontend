import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDownIconComponent } from './toggle-down-icon.component';

describe('ToggleDownIconComponent', () => {
  let component: ToggleDownIconComponent;
  let fixture: ComponentFixture<ToggleDownIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleDownIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleDownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
