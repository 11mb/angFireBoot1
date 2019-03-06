import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsDemoComponent } from './controls-demo.component';

describe('ControlsDemoComponent', () => {
  let component: ControlsDemoComponent;
  let fixture: ComponentFixture<ControlsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
