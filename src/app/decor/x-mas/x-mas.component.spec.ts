import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XMasComponent } from './x-mas.component';

describe('XMasComponent', () => {
  let component: XMasComponent;
  let fixture: ComponentFixture<XMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
