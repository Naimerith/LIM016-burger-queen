import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
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

  // Trae id de documentos de pedido
  getOrdeDoc(id: any) {
    return this.firestoreMenu.collection('pedidos').snapshotChanges().pipe(
      map(content => content.map(stado=>{
        let data = stado.payload.doc.data();
        let id = stado.payload.doc.id;
        return [id, {data}]
      })))
  }
}
