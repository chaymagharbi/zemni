import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patrimoine2Component } from './patrimoine2.component';

describe('Patrimoine2Component', () => {
  let component: Patrimoine2Component;
  let fixture: ComponentFixture<Patrimoine2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patrimoine2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patrimoine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
