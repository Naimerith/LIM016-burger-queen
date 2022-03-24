import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

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
  collection(): Observable<any> {
    return this.firestoreMenu.collection("pedidos").get();
  }
}
