import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnActivityDetailsComponent } from './learn-activity-details.component';

describe('LearnActivityDetailsComponent', () => {
  let component: LearnActivityDetailsComponent;
  let fixture: ComponentFixture<LearnActivityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnActivityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnActivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
