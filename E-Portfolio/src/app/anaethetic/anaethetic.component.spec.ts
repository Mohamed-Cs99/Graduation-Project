import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaetheticComponent } from './anaethetic.component';

describe('AnaetheticComponent', () => {
  let component: AnaetheticComponent;
  let fixture: ComponentFixture<AnaetheticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaetheticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaetheticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
