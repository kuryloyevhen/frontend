import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizationCardsComponent } from './civilization-cards.component';

describe('CivilizationCardsComponent', () => {
  let component: CivilizationCardsComponent;
  let fixture: ComponentFixture<CivilizationCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilizationCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
