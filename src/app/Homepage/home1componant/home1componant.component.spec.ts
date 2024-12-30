import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1componantComponent } from './home1componant.component';

describe('Home1componantComponent', () => {
  let component: Home1componantComponent;
  let fixture: ComponentFixture<Home1componantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1componantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1componantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
