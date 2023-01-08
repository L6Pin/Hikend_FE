import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedMountainsComponent } from './saved-mountains.component';

describe('SavedMountainsComponent', () => {
  let component: SavedMountainsComponent;
  let fixture: ComponentFixture<SavedMountainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedMountainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedMountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
