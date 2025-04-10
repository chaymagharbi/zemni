import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimervComponent } from './supprimerv.component';

describe('SupprimervComponent', () => {
  let component: SupprimervComponent;
  let fixture: ComponentFixture<SupprimervComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimervComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});