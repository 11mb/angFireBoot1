import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsDemoGridComponent } from './controls-demo-grid.component';

describe('ControlsDemoGridComponent', () => {
  let component: ControlsDemoGridComponent;
  let fixture: ComponentFixture<ControlsDemoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsDemoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsDemoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
