import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateloginComponent } from './candidatelogin.component';

describe('CandidateloginComponent', () => {
  let component: CandidateloginComponent;
  let fixture: ComponentFixture<CandidateloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
