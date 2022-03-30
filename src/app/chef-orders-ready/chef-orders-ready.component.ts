import { Component, OnInit } from '@angular/core';
import { Orders } from '../interfaz/order.interface';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-chef-orders-ready',
  templateUrl: './chef-orders-ready.component.html',
  styleUrls: ['./chef-orders-ready.component.scss']
})
export class ChefOrdersReadyComponent implements OnInit {
  itemsId: Orders[] = [];
  public myClass: boolean = false;
  orderPending: any;

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
      this.getOrderFilter();
    })
  }

  statusPedido(id: any) {
    console.log(this.itemsId)
    const statusNamePedido = this.itemsId.forEach((x: any) => {
      if (x.id == id && x.status == 'cocinando') {
        console.log('holaaaa')
        x.status = x.status = 'preparado';
      }
    })
    return statusNamePedido;
  }

  getOrderFilter() {
    return this.itemsId = this.itemsId.filter(pedidos => pedidos.status === 'cocinando');
  }

  btnPendient(e: any) {
    console.log('diste click a un pedido');
    const orderId = e.target.id;
    console.log(orderId)
    this.service.editOrder(orderId, 'preparado');
    this.statusPedido(orderId);
    this.getOrderFilter();

    // //vemos cual es el status del pedido al que hacemos click
    // const statusOrder = e.target.value;
    // console.log(statusOrder);
  }
}
