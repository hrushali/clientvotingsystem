import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecomponantComponent } from './homecomponant.component';

describe('HomecomponantComponent', () => {
  let component: HomecomponantComponent;
  let fixture: ComponentFixture<HomecomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomecomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
