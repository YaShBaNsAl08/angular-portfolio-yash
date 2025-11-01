import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendFridaysComponent } from './frontend-fridays.component';

describe('FrontendFridaysComponent', () => {
  let component: FrontendFridaysComponent;
  let fixture: ComponentFixture<FrontendFridaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendFridaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendFridaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
