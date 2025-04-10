import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiervComponent } from './modifierv.component';

describe('ModifiervComponent', () => {
  let component: ModifiervComponent;
  let fixture: ComponentFixture<ModifiervComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifiervComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});