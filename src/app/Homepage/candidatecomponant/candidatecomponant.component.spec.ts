import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatecomponantComponent } from './candidatecomponant.component';

describe('CandidatecomponantComponent', () => {
  let component: CandidatecomponantComponent;
  let fixture: ComponentFixture<CandidatecomponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatecomponantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatecomponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
