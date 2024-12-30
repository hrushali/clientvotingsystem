import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitvotecomponantComponent } from './submitvotecomponant.component';

describe('SubmitvotecomponantComponent', () => {
  let component: SubmitvotecomponantComponent;
  let fixture: ComponentFixture<SubmitvotecomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitvotecomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitvotecomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
