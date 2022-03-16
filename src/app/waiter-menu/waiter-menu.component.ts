import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ShareDataService } from '../services/share-data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-waiter-menu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.scss']
})
export class WaiterMenuComponent implements OnInit {

  //variables globales:

  itemsMenu: any[] = [];
  itemsMenuFilter: any[] = []; // trae los platos filtrados para mostrar
  menuCategory: string = 'desayuno';
  selectedTable: any;
  itemsCart = this.cartService.getItems(); // trae los platos del carrito
  username: string = '';


  constructor(private service: MenuService, //db de firebase
    private shareData: ShareDataService, //servicio para compartir info
    private cartService: CartService) { //Servicio del Carrito y Orden
  };

  // Ejecuta funciones al cargar vista
  ngOnInit() {
    //Inicializar valores
    this.getProducts();
    console.log(this.itemsCart);
    this.shareData.sharedMessage.subscribe(message => this.selectedTable = message) //trae la data message del servicio
  }

  getTotal() {
    return this.cartService.getTotal();
  }


  // Trae el listado de productos
  getProducts() {
    this.service.getProducts().subscribe(items => this.itemsMenu = items);

    this.itemsMenuFilter = this.getBreakfastItem();
  }


  commensal = {
    name: '',
    tableNumber: '01'
  };

  changeCommensalName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.commensal.name = element.value;
  }

  // Trae elementos del menú que coinciden con tipo Desayuno
  getBreakfastItem() {
    if (this.menuCategory === 'desayuno') {
      return this.itemsMenu.filter((item) => item.categoria == 'desayuno');
    }
    else return this.itemsMenu.filter((item) => item.categoria == 'almuerzo y cena');
  }

  // cambia estado de menu a mostrar(cambio de estado)
  changeTypeMenu(type: string) {
    this.menuCategory = type;
    this.itemsMenuFilter = this.getBreakfastItem();
  }

  makeOrder() {
    const date = new Date();
    const newDate = date.toString();
    const saveOrder = {
      cliente: this.username,
      total: this.getTotal(),
      mesa: this.selectedTable.numero_mesa,
      mesaID: this.selectedTable.id,
      status: 0,
      fecha: newDate,
      detalle: this.itemsCart,
      tiempo: ''
    }
    this.itemsCart = [];// limpia el contenido del carrito
    this.username = '';
    this.selectedTable = '';
    this.service.createOrder(saveOrder);
  }

    // Limpia el status de la mesa si vuelve a booking
    clearTable() {
      const idTable = this.selectedTable.id;
      const objTable = {status:false};
      this.service.updateTable(idTable,objTable);
      // console.log(this.selectedTable);
    }
};

