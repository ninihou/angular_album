import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoableCounterComponent } from './undoable-counter.component';

describe('UndoableCounterComponent', () => {
  let component: UndoableCounterComponent;
  let fixture: ComponentFixture<UndoableCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndoableCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndoableCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
