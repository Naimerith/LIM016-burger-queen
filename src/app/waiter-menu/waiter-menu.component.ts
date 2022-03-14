import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-waiter-menu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.scss']
})
export class WaiterMenuComponent implements OnInit {
  faCoffee = faCoffee;
  items: any;
  menuType =  'desayuno';

  constructor(private db: MenuService) { //db de firebase
    this.db.retornaItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    })
  };

  ngOnInit(): void {
    //se inicializan valores
    }


  commensal = {
    name: '',
    tableNumber: '01'
  };

  changeCommensalName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.commensal.name = element.value;
  };

  getTypeMenu(type: any) {
    this.menuType = type;
    console.log('aqui desayuno')
  }


};
