import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsubmitComponent } from './emailsubmit.component';

describe('EmailsubmitComponent', () => {
  let component: EmailsubmitComponent;
  let fixture: ComponentFixture<EmailsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailsubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
