import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDeleteComponent } from './city-delete.component';

describe('CityDeleteComponent', () => {
  let component: CityDeleteComponent;
  let fixture: ComponentFixture<CityDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
