import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalvotescomponantComponent } from './calvotescomponant.component';

describe('CalvotescomponantComponent', () => {
  let component: CalvotescomponantComponent;
  let fixture: ComponentFixture<CalvotescomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalvotescomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalvotescomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
