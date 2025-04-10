import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutervComponent } from './ajouterv.component';

describe('AjouterComponent', () => {
  let component: AjoutervComponent;
  let fixture: ComponentFixture<AjoutervComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutervComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});