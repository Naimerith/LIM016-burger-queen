import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  tablesEvent$ = new EventEmitter<string>(); //numero de mesa

  //creamos un objeto observable, que vamos a poder ver cuando cambia su valor 
  $modal = new EventEmitter<any>(); //permite comunicar componentes 

  constructor(private firestoreMenu: AngularFirestore) {
  }
  // Trae la colección de Productos de firebase
  getProducts(): Observable<any> {
    return this.firestoreMenu.collection('cartaLuna').snapshotChanges();
  }

  // Permite crear una orden y enviar a FB
  createOrder(order: any) {
    return this.firestoreMenu.collection('pedidos').add(order);
  }

  collectionOrder(): Observable<any> {
    return this.firestoreMenu.collection("pedidos").get();
  }
}
