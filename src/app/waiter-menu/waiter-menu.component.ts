import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../services/menu.service';
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
    private cartService: CartService) { //Servicio del numero de mesa y nombre de cliente
  };

  // Ejecuta funciones al cargar vista
  ngOnInit() {
    //Inicializar valores
    this.getProducts();

    //console.log(this.itemsCart);

    //Aqui me suscribo al servicio
    this.service.tablesEvent$.subscribe(numMesa => {
      localStorage.setItem("mesa", numMesa) //guardo el numero de mesa
    })
    this.numberTable = localStorage.getItem("mesa") //obtengo el num de mesa
  }


  ngOnDestroy() {
    //this.suscription?.unsubscribe();
    localStorage.removeItem("mesa"); //remuevo el numero de mesa cuando cambio de vista
    localStorage.removeItem("NombreCliente"); //remuevo el nombre del cliente cuando cambio de vista
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  // Trae el listado de productos para mostrar en el menu
  getProducts() {
    this.service.getProducts().subscribe((items: any[]) => {
      this.itemsMenu = [];
      console.log(this.itemsMenu)
      items.forEach((e: any) => {
        this.itemsMenu.push({
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        })
      });
      this.itemsMenuFilter = this.getBreakfastItem();
    });
  }
  /*
    //Trae id de documentos de la colección "Pedidos"
    getId() {
    this.service.getOrdeDoc(this.id).subscribe(
      content => {
        console.log(content);
      }
    )
  }
    id(id: any) {
      throw new Error('Method not implemented.');
    }
    */

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
  //Enviar pedido a cocina
  makeOrder() {
    console.log('diste click a enviar pedido')
    const date = new Date();
    const newDate = date.toString();
    const saveOrder = {
      mesero: localStorage.getItem('usuarioActivo'),
      cliente: this.nameCommensal,
      total: this.getTotal(),
      mesa: this.numberTable,
      status: 'Pendiente',
      fecha: newDate,
      detalle: this.itemsCart,
      tiempo: ''
    }

    console.log(saveOrder.detalle)
    this.itemsCart = [];// limpia el contenido del carrito

    this.username = '';
    this.service.createOrder(saveOrder);
  }
}