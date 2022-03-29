import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { Orders } from '../interfaz/order.interface';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-chef-kitchen',
  templateUrl: './chef-kitchen.component.html',
  styleUrls: ['./chef-kitchen.component.scss']
})
export class ChefKitchenComponent implements OnInit {
  itemsId: Orders[] = [];
  public myClass: boolean = false;
  statusOrder: string = 'pendiente';

  constructor(private service: MenuService) { }

  ngOnInit(): void {
    this.getId();
  }

    getId() {
    return this.service.collectionOrder().subscribe((docs: any[]) => {
      this.itemsId = [];
      docs.forEach(doc => {
        this.itemsId.push({
          id: doc.id,
          ...doc.data(),
        });
      })
      console.log(this.itemsId);
      //console.log(this.itemsId.sort((a: any,b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()))
    })
  }


  btnPendient(e: any) {
    console.log('diste click a un pedido');
    //this.myClass = !this.myClass;


    //vemos cual es el status del pedido al que hacemos click
    const statusOrder = e.target.value;
    console.log(statusOrder);

    if (statusOrder === 'pendiente') {
      this.myClass = !this.myClass;
    } else {
      this.myClass = !this.myClass;
      this.statusOrder = 'cocinando';
      console.log(this.statusOrder)
    }
    //obtenemos el ID de ese pedido al que hacemos click
    const orderId = e.target.id;
    console.log(orderId)

  }
}



