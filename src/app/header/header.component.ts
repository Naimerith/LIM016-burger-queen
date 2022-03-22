import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // userLogged = this.authService.getUserLogged()

  constructor(
    private authService: AuthService,
    public router: Router,) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    console.log('ha cerrado sesión');
    this.router.navigate(['/']);
  }

  usuarioLogueado = localStorage.getItem('usuarioActivo');

}
