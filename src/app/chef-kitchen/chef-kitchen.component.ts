import { Component, OnInit } from '@angular/core';
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
          ...doc.data()
        });
      })
      //console.log(this.itemsId);
    })
  }

  statusPedido(id: any) {
    console.log(this.itemsId)

    const statusNamePedido = this.itemsId.forEach((x: any) => {
      if (x.id == id && x.status == 'pendiente') {
        console.log('holaaaa')
        x.status = x.status = 'cocinando';
      }
    })
    console.log(statusNamePedido);
  }


  btnPendient(e: any) {
    console.log('diste click a un pedido');
    //this.myClass = !this.myClass;
    const orderId = e.target.id;
    console.log(orderId)

    this.statusPedido(orderId)

    //vemos cual es el status del pedido al que hacemos click
    // const statusOrder = e.target.value;
    // console.log(statusOrder);

    // if (statusOrder === 'pendiente') {
    //   this.myClass = !this.myClass;
    // } else {
    //   this.myClass = !this.myClass;
    //   this.statusOrder = 'cocinando';
    //   console.log(this.statusOrder)
    // }
    //obtenemos el ID de ese pedido al que hacemos click


  }
}