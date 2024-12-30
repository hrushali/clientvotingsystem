import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogincomponantComponent } from './adminlogincomponant.component';

describe('AdminlogincomponantComponent', () => {
  let component: AdminlogincomponantComponent;
  let fixture: ComponentFixture<AdminlogincomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminlogincomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlogincomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
