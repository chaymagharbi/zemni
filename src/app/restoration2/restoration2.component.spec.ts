import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restoration2Component } from './restoration2.component';

describe('Restoration2Component', () => {
  let component: Restoration2Component;
  let fixture: ComponentFixture<Restoration2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restoration2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restoration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
