import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

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
  disabled = true;

  constructor(private authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
  }

  ingresar() {

    console.log(this.usuario);
    const { name, email, password } = this.usuario; //desestructuramos las variables
    this.authService.login(email, password)
      .then(res => {
        const idUser = res?.user?.uid
        this.getIdUser(idUser)
        console.log(idUser)
        console.log("Inicio sesion", res);
      })
    // this.loginValidator(err);
    if ((this.usuario.email === '') || (this.usuario.password === '')) {
      console.log('Debes completar todos los campos');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes llenar todos los campos!',
        footer: 'No tienes cuenta? Consulta al administrador',
        color: 'rgba(247, 173, 80, 1)',
        background: '#fff',
        confirmButtonColor: 'rgba(13, 220, 83, 1)',
      })
      this.router.navigate(['/'])
    }
    if (this.usuario.email !== '' && this.usuario.password !== '') {
      if (this.usuario.password.length < 6) {
        Swal.fire({
          title: 'Contraseña incorrecta',
          text: 'Debe ingresar más de 6 caracteres',
          icon: 'error',
          color: 'rgba(247, 173, 80, 1)',
          background: '#fff',
          confirmButtonColor: 'rgba(13, 220, 83, 1)',
        })
        this.router.navigate(['/'])
      }
    }
    //Guardamos en el localStorage el usuario activo
    localStorage.setItem('usuarioActivo', this.usuario.name)
    this.router.navigate(['/tables'])
  }

  getIdUser(uid: any) {
    this.authService.getUser(uid).subscribe((doc) => {
      const rolUser = doc.payload.data().rol;
      console.log(rolUser)
      if (doc.payload.exists) {
        switch (rolUser) {
          case 'mesero': this.router.navigate(['/tables'])
            break;
          case 'cocinero': this.router.navigate(['/cocina'])
            break;
        }
      }

    })
  }
  activeBtn() {
    this.disabled = !this.disabled;
    if (this.disabled === true) {
      this.disabled = !this.disabled;
      Swal.fire({
        title: 'Haz cambiado de rol',
        text: 'Por favor, verifique el rol que ha seleccionado',
        icon: 'warning',
        color: 'rgba(247, 173, 80, 1)',
        background: '#fff',
        confirmButtonColor: 'rgba(13, 220, 83, 1)',
      })

    }
  }
}
