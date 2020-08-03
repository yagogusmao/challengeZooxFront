import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCreateComponent } from './state-create.component';

describe('StateCreateComponent', () => {
  let component: StateCreateComponent;
  let fixture: ComponentFixture<StateCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
