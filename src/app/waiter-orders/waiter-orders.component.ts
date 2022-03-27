import { Component, OnInit } from '@angular/core';
import { Orders, Detalle } from '../interfaz/order.interface';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-waiter-orders',
  templateUrl: './waiter-orders.component.html',
  styleUrls: ['./waiter-orders.component.scss']
})
export class WaiterOrdersComponent implements OnInit {
  public orderToServe: Orders[] = [];
  public clientOrder: Detalle[] = [];


  constructor(private service: MenuService) { }

  ngOnInit(): void {
    this.service.collectionOrder().subscribe(
      (ped: any) => {
        //console.log(ped); //trae los pedidos preparados por el cheff
        this.orderToServe = ped;
        //console.log(this.orderToServe)
      }
    )


  }

}
