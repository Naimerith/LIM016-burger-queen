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

  /*  logInForm = new FormGroup({
     email: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required)
   })*/
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ingresar() {
    console.log(this.usuario);
    const { email, password } = this.usuario; //desestructuramos las variables
    this.authService.register(email, password).then(res => {
      console.log("Se registro", res);
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
