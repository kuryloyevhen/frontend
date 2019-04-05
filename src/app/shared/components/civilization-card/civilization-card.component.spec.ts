import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizationCardComponent } from './civilization-card.component';

describe('CivilizationCardComponent', () => {
  let component: CivilizationCardComponent;
  let fixture: ComponentFixture<CivilizationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilizationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
