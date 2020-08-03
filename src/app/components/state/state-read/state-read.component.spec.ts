import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateReadComponent } from './state-read.component';

describe('StateReadComponent', () => {
  let component: StateReadComponent;
  let fixture: ComponentFixture<StateReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
