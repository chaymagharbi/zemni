import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutergComponent } from './ajouterg.component';

describe('AjoutergComponent', () => {
  let component: AjoutergComponent;
  let fixture: ComponentFixture<AjoutergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutergComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});