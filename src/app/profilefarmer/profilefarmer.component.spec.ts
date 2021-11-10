import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilefarmerComponent } from './profilefarmer.component';

describe('ProfilefarmerComponent', () => {
  let component: ProfilefarmerComponent;
  let fixture: ComponentFixture<ProfilefarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilefarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilefarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
