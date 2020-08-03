import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCreateComponent } from './city-create.component';

describe('CityCreateComponent', () => {
  let component: CityCreateComponent;
  let fixture: ComponentFixture<CityCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
