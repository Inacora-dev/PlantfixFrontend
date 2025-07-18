import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelOrderButtonComponent } from './cancel-order-button.component';

describe('CancelOrderButtonComponent', () => {
  let component: CancelOrderButtonComponent;
  let fixture: ComponentFixture<CancelOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelOrderButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
