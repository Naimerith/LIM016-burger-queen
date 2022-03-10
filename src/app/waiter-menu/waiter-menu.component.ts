import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../services/menu.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-waiter-menu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.scss']
})
export class WaiterMenuComponent implements OnInit {
  faCoffee = faCoffee;
  items: Observable<any[]>;

  commensal = {
    name: '',
    tableNumber: '01'
  }

  changeCommensalName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.commensal.name = element.value;
  }

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('menuLunaBurgers').valueChanges()
  }

  ngOnInit(): void {

  }


}
