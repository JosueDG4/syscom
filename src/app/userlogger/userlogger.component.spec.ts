import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloggerComponent } from './userlogger.component';

describe('UserloggerComponent', () => {
  let component: UserloggerComponent;
  let fixture: ComponentFixture<UserloggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
