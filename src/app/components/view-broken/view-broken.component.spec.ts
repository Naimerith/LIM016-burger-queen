import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBrokenComponent } from './view-broken.component';

describe('ViewBrokenComponent', () => {
  let component: ViewBrokenComponent;
  let fixture: ComponentFixture<ViewBrokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBrokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBrokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
