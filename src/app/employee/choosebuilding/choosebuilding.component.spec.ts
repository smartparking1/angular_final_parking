import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosebuildingComponent } from './choosebuilding.component';

describe('ChoosebuildingComponent', () => {
  let component: ChoosebuildingComponent;
  let fixture: ComponentFixture<ChoosebuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosebuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosebuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
