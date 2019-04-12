import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockingLayerComponent } from './blocking-layer.component';

describe('BlockingLayerComponent', () => {
  let component: BlockingLayerComponent;
  let fixture: ComponentFixture<BlockingLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockingLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockingLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
