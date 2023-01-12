import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainListFilterComponent } from './mountain-list-filter.component';

describe('MountainListFilterComponent', () => {
  let component: MountainListFilterComponent;
  let fixture: ComponentFixture<MountainListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MountainListFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MountainListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
