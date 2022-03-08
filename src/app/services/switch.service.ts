import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  //creamos un objeto observable, que vamos a poder ver cuando cambia su valor 
  $modal = new EventEmitter<any>(); //permite comunicar componentes 
}


//Los servicios son fragmentos de codigo, funciones externas que nos permiten utilizarla en nuestra aplicación.