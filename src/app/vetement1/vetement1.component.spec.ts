import { ComponentFixture, TestBed } from '@angular/core/testing';

import {Vetement1Component } from './vetement1.component';

describe('Vetement1Component', () => {
  let component:Vetement1Component;
  let fixture: ComponentFixture<Vetement1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vetement1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vetement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});