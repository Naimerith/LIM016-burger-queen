import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tablesEvent$ = new EventEmitter<string>(); //numero de mesa
  nameEvent$ = new EventEmitter<string>(); //nombre del comensal
  constructor() { }
}
