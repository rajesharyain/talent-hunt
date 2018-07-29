import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulereComponent } from './schedulere.component';

describe('SchedulereComponent', () => {
  let component: SchedulereComponent;
  let fixture: ComponentFixture<SchedulereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
