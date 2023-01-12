import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainRouteComponent } from './mountain-route.component';

describe('MountainRouteComponent', () => {
  let component: MountainRouteComponent;
  let fixture: ComponentFixture<MountainRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MountainRouteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MountainRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
