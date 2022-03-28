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
      console.log(docs);
      docs.forEach(doc => {
        this.itemsId.push({  //ordenando por mesa :(
          id: doc.id,
          ...doc.data(),
        });
      })
      console.log(this.itemsId);
      console.log(this.itemsId.sort((a,b)=> b.fecha.getTime() - a.fecha.getTime()))
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


