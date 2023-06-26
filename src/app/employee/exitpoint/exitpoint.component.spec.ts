import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitpointComponent } from './exitpoint.component';

describe('ExitpointComponent', () => {
  let component: ExitpointComponent;
  let fixture: ComponentFixture<ExitpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
