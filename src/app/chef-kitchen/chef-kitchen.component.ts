import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
//import { throwIfEmpty } from 'rxjs';
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
  orderPending: any;

  constructor(private service: MenuService,
    public router: Router) { }

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
      //console.log(this.itemsId);
    })
  }

  //cambiar de status pendiente a cocinando
  statusPedido(id: any) {
    console.log(this.itemsId)
    const statusNamePedido = this.itemsId.forEach((x: any) => {
      if (x.id == id && x.status == 'Pendiente') {
        console.log('holaaaa')
        x.status = x.status = 'Cocinando';
      }
    })
    return statusNamePedido;
  }

  getOrderFilter() {
    return this.itemsId = this.itemsId.filter(pedidos => pedidos.status === 'Pendiente');
  }

  btnPendient(e: any) {
    console.log('diste click a un pedido');
    //this.myClass = !this.myClass;
    const orderId = e.target.id;
    console.log(orderId)
    this.service.editOrder(orderId, 'Cocinando');
    this.statusPedido(orderId);
    this.getOrderFilter();

    //vemos cual es el status del pedido al que hacemos click
    const statusOrder = e.target.value;
    console.log(statusOrder);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Enviado a cocina',
      showConfirmButton: false,
      timer: 2000,
      color: 'rgba(247, 173, 80, 1)',
      background: '#fff',
    })
    this.router.navigate(['/cocinando']);
  }
}