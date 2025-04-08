import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patrimoine1Component } from './patrimoine1.component';

describe('Patrimoine1Component', () => {
  let component: Patrimoine1Component;
  let fixture: ComponentFixture<Patrimoine1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patrimoine1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patrimoine1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
