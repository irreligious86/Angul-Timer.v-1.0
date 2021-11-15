import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDigitComponent } from './output-digit.component';

describe('OutputDigitComponent', () => {
  let component: OutputDigitComponent;
  let fixture: ComponentFixture<OutputDigitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputDigitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
