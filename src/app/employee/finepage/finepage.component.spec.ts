import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinepageComponent } from './finepage.component';

describe('FinepageComponent', () => {
  let component: FinepageComponent;
  let fixture: ComponentFixture<FinepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
