import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sesión finalizada',
      showConfirmButton: false,
      timer: 2000,
      color: 'rgba(247, 173, 80, 1)',
      background: '#fff',
    })
    this.router.navigate(['/']);
  }

  usuarioLogueado = localStorage.getItem('usuarioActivo');

}
