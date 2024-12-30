import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaolcomponantComponent } from './emaolcomponant.component';

describe('EmaolcomponantComponent', () => {
  let component: EmaolcomponantComponent;
  let fixture: ComponentFixture<EmaolcomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmaolcomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmaolcomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
