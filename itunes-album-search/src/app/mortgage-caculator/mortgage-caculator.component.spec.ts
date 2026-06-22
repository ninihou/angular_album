import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCaculatorComponent } from './mortgage-caculator.component';

describe('MortgageCaculatorComponent', () => {
  let component: MortgageCaculatorComponent;
  let fixture: ComponentFixture<MortgageCaculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortgageCaculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgageCaculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
