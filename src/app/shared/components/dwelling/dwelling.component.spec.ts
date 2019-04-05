import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwellingComponent } from './dwelling.component';

describe('DwellingComponent', () => {
  let component: DwellingComponent;
  let fixture: ComponentFixture<DwellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
