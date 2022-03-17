import { Component, OnInit } from '@angular/core';
import { Orders } from '../interfaz/order.interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-waiter-orders',
  templateUrl: './waiter-orders.component.html',
  styleUrls: ['./waiter-orders.component.scss']
})
export class WaiterOrdersComponent implements OnInit {

  public order: Orders[] = [];
  constructor(private orderService: CartService) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe(
      (ped: any) => {
        console.log(ped) //me traigo la coleccion
        this.order = ped;
        console.log(this.order)
        /* this.order = ped;
        console.log(this.order) */
      }
    )
  }

}
