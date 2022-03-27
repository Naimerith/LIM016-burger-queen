import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChefComponent } from './header-chef.component';

describe('HeaderChefComponent', () => {
  let component: HeaderChefComponent;
  let fixture: ComponentFixture<HeaderChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderChefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
