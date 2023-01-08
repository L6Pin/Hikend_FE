import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainListItemComponent } from './mountain-list-item.component';

describe('MountainListItemComponent', () => {
  let component: MountainListItemComponent;
  let fixture: ComponentFixture<MountainListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
