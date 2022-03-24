import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      providers: [
        AngularFireAuth,
      ]
    });
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
