import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gastronomie3Component } from './gastronomie3.component';

describe('Gastronomie3Component', () => {
  let component: Gastronomie3Component;
  let fixture: ComponentFixture<Gastronomie3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gastronomie3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gastronomie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});