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
    email: '',
    password: '',
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.usuario);
    const { email, password } = this.usuario; //desestructuramos las variables
    this.authService.login(email, password).then(res => {
      console.log("Inicio sesion", res);
    })
    //Obtenemos el usuario logueado 
    this.authService.getUserLogged().subscribe(res => {
      console.log(res?.email); //Si esta variable tiene el campo email, muestralo
    })
  }
  /* login() {
    console.log(this.logInForm.value)
  } */

}
