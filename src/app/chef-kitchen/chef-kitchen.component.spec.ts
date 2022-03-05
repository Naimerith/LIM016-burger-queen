import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefKitchenComponent } from './chef-kitchen.component';

describe('ChefKitchenComponent', () => {
  let component: ChefKitchenComponent;
  let fixture: ComponentFixture<ChefKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
