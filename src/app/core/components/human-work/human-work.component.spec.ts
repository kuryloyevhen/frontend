import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanWorkComponent } from './human-work.component';

describe('HumanWorkComponent', () => {
  let component: HumanWorkComponent;
  let fixture: ComponentFixture<HumanWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
