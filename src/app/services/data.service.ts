import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tablesEvent$ = new EventEmitter<string>(); //numero de mesa

  //creamos un objeto observable, que vamos a poder ver cuando cambia su valor 
  $modal = new EventEmitter<any>(); //permite comunicar componentes 
  constructor() { }
}
