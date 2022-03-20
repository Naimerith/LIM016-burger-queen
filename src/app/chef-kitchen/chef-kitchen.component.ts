import { Component, OnInit } from '@angular/core';
import { Detalle, Orders } from '../interfaz/order.interface';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-chef-kitchen',
  templateUrl: './chef-kitchen.component.html',
  styleUrls: ['./chef-kitchen.component.scss']
})
export class ChefKitchenComponent implements OnInit {
  public order: Orders[] = [];
  //public clientOrder: Detalle[] = [];
  constructor(private orderService: CartService) { }

  ngOnInit(): void {
    this.orderService.getOrder().subscribe(
      (ped: any) => {
        //console.log(ped) //me traigo la coleccion
        this.order = ped;
        console.log(this.order)
      }
    )
  }
}
