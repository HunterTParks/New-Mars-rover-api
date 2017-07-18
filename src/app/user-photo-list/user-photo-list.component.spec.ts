import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoListComponent } from './user-photo-list.component';

describe('UserPhotoListComponent', () => {
  let component: UserPhotoListComponent;
  let fixture: ComponentFixture<UserPhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPhotoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
