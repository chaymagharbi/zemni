import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteAccComponent } from './carte-acc.component';

describe('CarteAccComponent', () => {
  let component: CarteAccComponent;
  let fixture: ComponentFixture<CarteAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteAccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
