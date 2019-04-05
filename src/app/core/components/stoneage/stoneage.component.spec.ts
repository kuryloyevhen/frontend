import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneageComponent } from './stoneage.component';

describe('StoneageComponent', () => {
  let component: StoneageComponent;
  let fixture: ComponentFixture<StoneageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoneageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoneageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
