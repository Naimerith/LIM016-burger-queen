import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})


export class SignInComponent implements OnInit {

  usuario = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.usuario);
    const { name, email, password } = this.usuario; //desestructuramos las variables
    this.authService.login(email, password).then(res => {
      console.log("Inicio sesion", res);
    })
    //Guardamos en el localStorage el usuario activo
    localStorage.setItem('usuarioActivo', this.usuario.name)
  }
}
