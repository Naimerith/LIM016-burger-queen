import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefOrdersReadyComponent } from './chef-orders-ready.component';

describe('ChefOrdersReadyComponent', () => {
  let component: ChefOrdersReadyComponent;
  let fixture: ComponentFixture<ChefOrdersReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefOrdersReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefOrdersReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
