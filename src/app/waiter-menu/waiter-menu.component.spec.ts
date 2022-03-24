import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

import { WaiterMenuComponent } from './waiter-menu.component';

describe('WaiterMenuComponent', () => {
  let component: WaiterMenuComponent;
  let fixture: ComponentFixture<WaiterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        AngularFireAuth,
      ],
      declarations: [WaiterMenuComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
