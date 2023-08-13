import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertedAmountComponent } from './converted-amount.component';

describe('ConvertedAmountComponent', () => {
  let component: ConvertedAmountComponent;
  let fixture: ComponentFixture<ConvertedAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvertedAmountComponent]
    });
    fixture = TestBed.createComponent(ConvertedAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
