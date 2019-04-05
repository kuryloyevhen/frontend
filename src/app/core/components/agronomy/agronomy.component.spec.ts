import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgronomyComponent } from './agronomy.component';

describe('AgronomyComponent', () => {
  let component: AgronomyComponent;
  let fixture: ComponentFixture<AgronomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgronomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgronomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
