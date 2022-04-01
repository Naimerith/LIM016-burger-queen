import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { ChefOrdersReadyComponent } from './chef-orders-ready.component';

describe('ChefOrdersReadyComponent', () => {
  let component: ChefOrdersReadyComponent;
  let fixture: ComponentFixture<ChefOrdersReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefOrdersReadyComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterTestingModule
      ],
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
