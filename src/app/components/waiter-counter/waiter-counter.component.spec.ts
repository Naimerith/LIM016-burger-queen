import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaiterCounterComponent } from './waiter-counter.component';

describe('WaiterCounterComponent', () => {
  let component: WaiterCounterComponent;
  let fixture: ComponentFixture<WaiterCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
