import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmithyComponent } from './smithy.component';

describe('SmithyComponent', () => {
  let component: SmithyComponent;
  let fixture: ComponentFixture<SmithyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmithyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmithyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
