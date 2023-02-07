import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainsMapComponent } from './mountains-map.component';

describe('MountainsMapComponent', () => {
  let component: MountainsMapComponent;
  let fixture: ComponentFixture<MountainsMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainsMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
