import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

export interface Item {
  nombre: string;
  cantidad: number;
  categoria: string;
  precio: number;
  tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // Trae la colección de Productos de firebase
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemsDocument!: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('cartaLuna');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  getProducts() {
    return this.items;
  }

  // Trae la colección de Mesas FB
  getTables(): Observable<any> {
    return this.afs.collection('mesas').snapshotChanges();
  }

  // Actualiza el status de las mesas
  updateTable(id: string, status: Object) {
    return this.afs.collection('mesas').doc(id).update(status);
  }

  // Permite crear una orden y enviar a FB
  createOrder(order: any) {
    return this.afs.collection('pedidos').add(order);
  }
}
