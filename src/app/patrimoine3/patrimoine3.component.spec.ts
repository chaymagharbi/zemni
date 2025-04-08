import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patrimoine3Component } from './patrimoine3.component';

describe('Patrimoine3Component', () => {
  let component: Patrimoine3Component;
  let fixture: ComponentFixture<Patrimoine3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patrimoine3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Patrimoine3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
