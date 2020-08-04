import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDeleteComponent } from './state-delete.component';

describe('StateDeleteComponent', () => {
  let component: StateDeleteComponent;
  let fixture: ComponentFixture<StateDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
