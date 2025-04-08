import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restoration1Component } from './restoration1.component';

describe('Restoration1Component', () => {
  let component: Restoration1Component;
  let fixture: ComponentFixture<Restoration1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restoration1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restoration1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
