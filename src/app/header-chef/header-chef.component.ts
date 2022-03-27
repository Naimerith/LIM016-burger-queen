import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header-chef',
  templateUrl: './header-chef.component.html',
  styleUrls: ['./header-chef.component.scss']
})
export class HeaderChefComponent implements OnInit {

  constructor(private authService: AuthService,
    public router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    console.log('ha cerrado sesión');
    this.router.navigate(['/']);
  }

  usuarioLogueado = localStorage.getItem('usuarioActivo');

}
