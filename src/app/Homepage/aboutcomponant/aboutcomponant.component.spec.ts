import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcomponantComponent } from './aboutcomponant.component';

describe('AboutcomponantComponent', () => {
  let component: AboutcomponantComponent;
  let fixture: ComponentFixture<AboutcomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutcomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutcomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
