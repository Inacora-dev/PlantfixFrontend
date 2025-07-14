import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleUpIconComponent } from './toggle-up-icon.component';

describe('ToggleUpIconComponent', () => {
  let component: ToggleUpIconComponent;
  let fixture: ComponentFixture<ToggleUpIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleUpIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleUpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
