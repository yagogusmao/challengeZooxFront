import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityReadComponent } from './city-read.component';

describe('CityReadComponent', () => {
  let component: CityReadComponent;
  let fixture: ComponentFixture<CityReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
