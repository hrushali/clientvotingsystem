import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactQueriesComponent } from './contact-queries.component';

describe('ContactQueriesComponent', () => {
  let component: ContactQueriesComponent;
  let fixture: ComponentFixture<ContactQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactQueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
