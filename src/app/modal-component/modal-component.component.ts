import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent implements OnInit {

  //Aqui consumimos el servicio 
  constructor(private modalSS: MenuService) { }

  ngOnInit(): void {
  }

  //Aqui estamos emitiendo el valor false para cerrar el modal
  closeModal() {
    this.modalSS.$modal.emit(false)

  }


}
