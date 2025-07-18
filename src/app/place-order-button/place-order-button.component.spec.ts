import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrderButtonComponent } from './place-order-button.component';

describe('PlaceOrderButtonComponent', () => {
  let component: PlaceOrderButtonComponent;
  let fixture: ComponentFixture<PlaceOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceOrderButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
