import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-waiter-counter',
  templateUrl: './waiter-counter.component.html',
  styleUrls: ['./waiter-counter.component.scss']
})
export class WaiterCounterComponent implements OnInit {

  //variables globales
  @Input () itemCart: any;

  quantity:number=1;
  i=1;
  total:number=0;

  constructor(private cartService: CartService) {   }

  ngOnInit(): void {
    //se inicializan valores
    //this.total = this.quantity * this.itemPrice;
  }

  plus(){
    if(this.i){
      this.i++;
      //this.quantity=this.i;
      //this.total=this.item.precio*this.item.cantidad;
      this.cartService.updateCart(this.itemCart,'+');
    }
  }

  minus(){
    if(this.itemCart.cantidad !=1){
      //this.itemCart.cantidad--;
      // this.quantity=this.i;
      // this.total = this.total - this.itemPrice;
      this.cartService.updateCart(this.itemCart,'-');
    }
  }

  deleteItem(itemCart:any) {
    this.cartService.deleteItem(itemCart);
  }


}
