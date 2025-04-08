import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgprComponent } from './imgpr.component';

describe('ImgprComponent', () => {
  let component: ImgprComponent;
  let fixture: ComponentFixture<ImgprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgprComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
