import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadadmincomponantComponent } from './leadadmincomponant.component';

describe('LeadadmincomponantComponent', () => {
  let component: LeadadmincomponantComponent;
  let fixture: ComponentFixture<LeadadmincomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadadmincomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadadmincomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
