import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
      if (x.id == id && x.status == 'Cocinando') {
        console.log('holaaaa')
        x.status = x.status = 'Preparado';
      }
    })
    return statusNamePedido;
  }

  getOrderFilter() {
    return this.itemsId = this.itemsId.filter(pedidos => pedidos.status === 'Cocinando');
  }

  btnPendient(e: any) {
    console.log('diste click a un pedido');
    const orderId = e.target.id;
    console.log(orderId)
    this.service.editOrder(orderId, 'Preparado');
    this.statusPedido(orderId);
    this.getOrderFilter();

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Orden Lista para servir',
      showConfirmButton: false,
      timer: 2000,
      color: 'rgba(247, 173, 80, 1)',
      background: '#fff',
    })
  }
}
