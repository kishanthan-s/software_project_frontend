import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecourierComponent } from './profilecourier.component';

describe('ProfilecourierComponent', () => {
  let component: ProfilecourierComponent;
  let fixture: ComponentFixture<ProfilecourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilecourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
