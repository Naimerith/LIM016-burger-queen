import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-template-products',
  templateUrl: './template-products.component.html',
  styleUrls: ['./template-products.component.scss']
})
export class TemplateProductsComponent implements OnInit {

  @Input () product: any;
  itemsCart = this.cartService.getItems();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    // agrega producto al carrito si está vacio
  if(this.itemsCart.length === 0) {
    this.cartService.addToCart(product);
  } else {
      // agrega el producto si el id es diferente a los agregados
    if(!this.itemsCart.find( (item: any) => item.id === product.id)) {
      this.cartService.addToCart(product);
      // si encuentra al id actualiza su cantidad
    } else {
      this.cartService.updateCart(product,'+');
    }
  }
}

}
