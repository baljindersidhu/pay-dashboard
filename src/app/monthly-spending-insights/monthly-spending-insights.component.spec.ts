import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySpendingInsightsComponent } from './monthly-spending-insights.component';

describe('MonthlySpendingInsightsComponent', () => {
  let component: MonthlySpendingInsightsComponent;
  let fixture: ComponentFixture<MonthlySpendingInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlySpendingInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySpendingInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
