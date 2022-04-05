import { Component, OnInit } from '@angular/core';
import { Orders, Detalle } from '../interfaz/order.interface';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-waiter-orders',
  templateUrl: './waiter-orders.component.html',
  styleUrls: ['./waiter-orders.component.scss']
})
export class WaiterOrdersComponent implements OnInit {
  itemsId: Orders[] = [];
  itemsServed: Orders[] = [];
  clientOrder: Detalle[] = [];


  constructor(private service: MenuService) { }

  ngOnInit(): void {
    this.getId();
    this.getIdItemsServed();
  }
  //En la sección "Por servir" traer solo los pedidos preparados listos para servir
  //Creando función de filtro
  getOrderFilter() {
    return this.itemsId = this.itemsId.filter(order => order.status === 'Preparado');
  }
  getOrdeFilterServed() {
    return this.itemsId = this.itemsId.filter(order => order.status === 'Servido');
  }

  //traer pedidos con status "preparados" de la colección de firebase
  getId() {
    return this.service.collectionOrder().subscribe((docs: any[]) => {
      this.itemsId = [];
      docs.forEach(doc => {
        this.itemsId.push(
          {
            id: doc.id,
            ...doc.data()
          })
      });
      this.getOrderFilter();
    })
  }

  //Mostrar order servida en la sección de "Servido"
  //Funcionalidad al botón de listo para que la orden se muestre en la sección de servidos
  btnListo(e: any) {
    console.log('diste click a Listo');
    const orderId = e.target.id;
    console.log(orderId);
    this.service.editOrder(orderId, 'Servido');
    this.statusPedido(orderId);
    this.getOrderFilter();
    this.getIdItemsServed()
  };

  //Cambiar el status del pedido
  statusPedido(idaaa: any) {
    const statusNamePedido = this.itemsId.forEach((item: any) => {
      if (item.id == idaaa && item.status == "Preparado") {
        item.status = item.status = 'Servido';
      }
    })
    return statusNamePedido;
  }

  //traer pedidos con status "servidos" de la colección de firebase
  //Función para mostrar las ordenes servidas
  servedOrdersFilter() {
    return this.itemsServed = this.itemsServed.filter(order => order.status === 'Servido');
  }

  //Funcionalidad al botón delete para archivar orden
  btnfileOrder(e: any) {
    console.log('se archiva orden');
    const orderIdD = e.target.id;
    console.log(orderIdD);
    this.service.editOrder(orderIdD, 'Archivado');
    this.fileOrder(orderIdD);
    //this.getOrdeFilterServed();
    this.getIdItemsServed()
  }

  //cambiar a status archivado
  fileOrder(id: any) {
    const statusNamePedido = this.itemsId.forEach((item: any) => {
      if (item.id == id && item.status == "Preparado" || "Servido") {
        item.status = item.status = 'Archivado';
      }
    })
    return statusNamePedido;
  }

  //traer pedidos con status "servidos" de la colección de firebase
  getIdItemsServed() {
    return this.service.collectionOrder().subscribe((docs: any[]) => {
      this.itemsServed = [];
      console.log(this.itemsServed);
      docs.forEach(doc => {
        this.itemsServed.push(
          {
            id: doc.id,
            ...doc.data()
          })
      });
      this.servedOrdersFilter();

    })
  }





}
