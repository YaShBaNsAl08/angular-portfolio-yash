import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPgComponent } from './check-pg.component';

describe('CheckPgComponent', () => {
  let component: CheckPgComponent;
  let fixture: ComponentFixture<CheckPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
