import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gastronomie2Component } from './gastronomie2.component';

describe('Gastronomie2Component', () => {
  let component: Gastronomie2Component;
  let fixture: ComponentFixture<Gastronomie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gastronomie2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gastronomie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});