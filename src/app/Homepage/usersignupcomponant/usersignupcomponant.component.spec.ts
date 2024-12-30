import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersignupcomponantComponent } from './usersignupcomponant.component';

describe('UsersignupcomponantComponent', () => {
  let component: UsersignupcomponantComponent;
  let fixture: ComponentFixture<UsersignupcomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersignupcomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersignupcomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
