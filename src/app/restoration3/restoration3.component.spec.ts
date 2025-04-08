import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restoration3Component } from './restoration3.component';

describe('Restoration3Component', () => {
  let component: Restoration3Component;
  let fixture: ComponentFixture<Restoration3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restoration3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restoration3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
