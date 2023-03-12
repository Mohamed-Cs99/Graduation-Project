import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensiveCareComponent } from './intensive-care.component';

describe('IntensiveCareComponent', () => {
  let component: IntensiveCareComponent;
  let fixture: ComponentFixture<IntensiveCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntensiveCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntensiveCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
