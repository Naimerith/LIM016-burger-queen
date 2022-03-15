import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  usuario = {
    email: '',
    password: ''
  }

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  registrar() {
    console.log(this.usuario);
    const { email, password } = this.usuario; //desestructuramos las variables
    this.authService.register(email, password).then(res => {
      console.log("Se registro", res);
    })
  }


}
