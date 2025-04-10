import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiergComponent } from './modifierg.component';

describe('ModifiergComponent', () => {
  let component: ModifiergComponent;
  let fixture: ComponentFixture<ModifiergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifiergComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});