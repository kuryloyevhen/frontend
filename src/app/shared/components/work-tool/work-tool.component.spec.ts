import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkToolComponent } from './work-tool.component';

describe('WorkToolsComponent', () => {
  let component: WorkToolComponent;
  let fixture: ComponentFixture<WorkToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
