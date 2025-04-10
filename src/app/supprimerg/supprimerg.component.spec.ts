import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimergComponent } from './supprimerg.component';

describe('SupprimergComponent', () => {
  let component: SupprimergComponent;
  let fixture: ComponentFixture<SupprimergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimergComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});