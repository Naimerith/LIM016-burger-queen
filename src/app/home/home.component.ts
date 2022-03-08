import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalSwitch: boolean = false;

  //aqui consumimos el servicio 
  constructor(private modalSS: SwitchService) { }


  //esta funcion se inicia apenas se renderice el componente 
  //apenas inicie el componente necesito escuchar el objeto observable, es decir obtener el valor 
  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor) => { //esta funcion es un callback 
      this.modalSwitch = valor //valor tienen el valor actual del switch -true o false-
    })
  }

  openModal() {
    this.modalSwitch = true; //cuando el modal este encendido abre el modal
  }

}
