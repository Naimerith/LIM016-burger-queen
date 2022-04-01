import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsCart: any[] = []; //para carrito


  constructor() { }

  //agregar a carrito (sale de templates-products)
  addToCart(product: any) {
    product.cantidad = 1;
    product.total = product.precio;
    this.itemsCart.push(product);
  }

  //actualiza contenido del carrito
  updateCart(product: any, operator: string) {
    for (let j = 0; j < this.itemsCart.length; j++) {
      if (this.itemsCart[j].id === product.id) {
        switch (operator) {
          case '+':
            this.itemsCart[j].cantidad++;
            this.itemsCart[j].total = this.itemsCart[j].total + product.precio;
            break;
          case '-':
            this.itemsCart[j].cantidad--;
            this.itemsCart[j].total = this.itemsCart[j].total - product.precio;
            break;
        }
        break;
      }
    }
  }

  // elimina contenido del carrito
  deleteItem(product: any) {
    const index = this.itemsCart.indexOf(product);
    if (index !== -1) {
      this.itemsCart.splice(index, 1);
    }
  }

  //Calcula el total de totales
  getTotal() {
    let total = 0;
    this.itemsCart.forEach(item => {
      //console.log(item)
      total = total + item.total;
    });
    return total;
  }

  //obtener items de carrito
  getItems() {
    return this.itemsCart;
  }

  //limpiar el carrito
  clearCart() {
    this.itemsCart = [];
    return this.itemsCart;
  }
}
