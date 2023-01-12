import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainMapComponent } from './mountain-map.component';

describe('MountainMapComponent', () => {
  let component: MountainMapComponent;
  let fixture: ComponentFixture<MountainMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MountainMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MountainMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
