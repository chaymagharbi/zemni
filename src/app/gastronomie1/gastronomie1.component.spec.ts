import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gastronomie1Component } from './gastronomie1.component';

describe('Gastronomie1Component', () => {
  let component: Gastronomie1Component;
  let fixture: ComponentFixture<Gastronomie1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gastronomie1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gastronomie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});