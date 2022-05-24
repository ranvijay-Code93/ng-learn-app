import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPageNotFoundComponent } from './guest-page-not-found.component';

describe('GuestPageNotFoundComponent', () => {
  let component: GuestPageNotFoundComponent;
  let fixture: ComponentFixture<GuestPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
