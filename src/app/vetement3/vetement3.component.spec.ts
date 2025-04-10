import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vetement3Component } from './vetement3.component';

describe('Vetement3Component', () => {
  let component: Vetement3Component;
  let fixture: ComponentFixture<Vetement3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vetement3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vetement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});