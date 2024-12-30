import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultcomponantComponent } from './resultcomponant.component';

describe('ResultcomponantComponent', () => {
  let component: ResultcomponantComponent;
  let fixture: ComponentFixture<ResultcomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultcomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultcomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
