import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { MenuService } from '../services/menu.service';
//import { ShareDataService } from '../services/share-data.service';
import { CartService } from '../services/cart.service';
import { Detalle } from '../interfaz/order.interface';

@Component({
  selector: 'app-waiter-menu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.scss']
})
export class WaiterMenuComponent implements OnInit, OnDestroy {

  //variables globales:
  numberTable: any;
  suscription: Subscription | undefined; // Su valor por defecto es undefined

  itemsMenu: any[] = [];
  itemsMenuFilter: any[] = []; // trae los platos filtrados para mostrar
  menuCategory: string = '';
  selectedTable: any;
  itemsCart: Detalle[] = this.cartService.getItems(); // trae los platos del carrito
  username: string = '';
  nameCommensal: any = "";

  constructor(private service: MenuService, //db de firebase
    //private shareData: ShareDataService, //servicio para compartir info
    private cartService: CartService,
    private dataService: DataService) { //Servicio del numero de mesa y nombre de cliente
  };

  // Ejecuta funciones al cargar vista
  ngOnInit() {
    //Inicializar valores
    this.getProducts();
    //console.log(this.itemsCart);

    //Aqui me suscribo al servicio
    this.dataService.tablesEvent$.subscribe(numMesa => {
      localStorage.setItem("mesa", numMesa) //guardo el numero de mesa
    })
    this.numberTable = localStorage.getItem("mesa") //obtengo el num de mesa
  }


  ngOnDestroy() {
    //this.suscription?.unsubscribe();
    localStorage.removeItem("mesa"); //remuevo el numero de mesa cuando cambio de vista
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  // Trae el listado de productos para mostrar en el menu
  getProducts() {
    this.service.getProducts().subscribe(items => this.itemsMenu = items);
    this.itemsMenuFilter = this.getBreakfastItem();
  }

  saveNameClient(event: Event) {
    const element = event.target as HTMLInputElement;
    this.nameCommensal = element.value;
    localStorage.setItem("NombreCliente", this.nameCommensal)
    this.nameCommensal = localStorage.getItem("NombreCliente") //obtengo el num de mesa
  }


  // Muestra los productos disponibles para desayuno o cena segun lo que seleccione 
  getBreakfastItem() {
    if (this.menuCategory === 'desayuno') {
      return this.itemsMenu.filter((item) => item.categoria == 'desayuno');
    }
    else return this.itemsMenu.filter((item) => item.categoria == 'almuerzo y cena');
  }

  // cambia el estado de menu a mostrar(Almuerzo y Desayuno)
  changeTypeMenu(type: string) {
    this.menuCategory = type;
    this.itemsMenuFilter = this.getBreakfastItem();
  }

  makeOrder() {
    console.log('diste click a enviar pedido')
    const date = new Date();
    const newDate = date.toString();
    const saveOrder = {
      mesero: 'Carlos',
      cliente: this.nameCommensal,
      total: this.getTotal(),
      mesa: this.numberTable,
      status: 0,
      fecha: newDate,
      detalle: this.itemsCart,
      tiempo: ''
    }
    console.log(saveOrder.detalle)
    this.itemsCart = [];// limpia el contenido del carrito

    this.username = '';
    this.service.createOrder(saveOrder);
  }
};

