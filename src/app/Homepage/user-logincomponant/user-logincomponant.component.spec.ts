import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogincomponantComponent } from './user-logincomponant.component';

describe('UserLogincomponantComponent', () => {
  let component: UserLogincomponantComponent;
  let fixture: ComponentFixture<UserLogincomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLogincomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLogincomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
