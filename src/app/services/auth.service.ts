import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData$ = this.authFirebase.authState;

  constructor(private authFirebase: AngularFireAuth, private firestore: AngularFirestore) {
  }
  /*Inicio de sesión*/
  async login(email: string, password: string) {
    try {
      return await this.authFirebase.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log('error en login', e)
      return null
    }
  }

  //Obtener Id usuario logueado
  getUser(uid: string): Observable<any> {
    return this.firestore.collection('rol').doc(uid).snapshotChanges();
  }

  /* Cerrar sesión */
  logout() {
    this.authFirebase.signOut();
    localStorage.removeItem("usuarioActivo");
  }
}
