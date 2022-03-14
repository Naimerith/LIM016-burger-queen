import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedDishesService {
  itemsCart: any[] = []; //para carrito

  constructor() { }

  //funciones;

  //agregar a carrito (sale de templates-products)
  addToCart(product: any) {
    product.cantidad = 1;
    product.total = product.precio;
    this.itemsCart.push(product);
  }

  //actualizar contenido de carrito
  updateCart(product: any, operator: string) {
    for (let j = 0; j < this.itemsCart.length; j++) {
      if(this.itemsCart[j].id === product.id) {
        switch(operator) {
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

  //eliminar contenido del carrito
  deleteItem(product: any) {
    const index = this.itemsCart.indexOf(product);
    if(index !== -1) {
      this.itemsCart.splice(index,1);
    }
  }

  //obtener items del carrito
  getItems() {
    return this.itemsCart;
  }

  // limpiar el carrito
  clearCart() {
    this.itemsCart = [];
    return this.itemsCart;
  }
}
