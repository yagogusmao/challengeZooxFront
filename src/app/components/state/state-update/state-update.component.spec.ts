import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateUpdateComponent } from './state-update.component';

describe('StateUpdateComponent', () => {
  let component: StateUpdateComponent;
  let fixture: ComponentFixture<StateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
