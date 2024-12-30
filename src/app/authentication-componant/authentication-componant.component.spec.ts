import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponantComponent } from './authentication-componant.component';

describe('AuthenticationComponantComponent', () => {
  let component: AuthenticationComponantComponent;
  let fixture: ComponentFixture<AuthenticationComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationComponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
