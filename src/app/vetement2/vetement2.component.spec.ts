import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vetement2Component } from './vetement2.component';

describe('Vetement2Component', () => {
  let component: Vetement2Component;
  let fixture: ComponentFixture<Vetement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vetement2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vetement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});