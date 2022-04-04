import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
