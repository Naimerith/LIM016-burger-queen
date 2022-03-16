import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'my-app/node_modules/rxjs/dist/types';
import { DataService } from '../services/data.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-waiter-menu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.scss']
})
export class WaiterMenuComponent implements OnInit, OnDestroy {
  faCoffee = faCoffee;
  menuLuna: any = [];

  commensal = {
    name: '',
  }

  numberTable: string = 'hola';
  suscription: Subscription | undefined; // Su valor por defecto es undefined

  changeCommensalName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.commensal.name = element.value;
  }


  constructor(
    private service: MenuService,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.service.getAllMenu().subscribe(menuLuna => {
      this.menuLuna = menuLuna.menu;
      console.log(this.menuLuna)
    });

    //Aqui me suscribo al servicio
    this.suscription = this.dataService.tablesEvent$.subscribe(numMesa => {
      this.numberTable = numMesa;
      console.log('numero de mesa es:', numMesa);
    })

    this.dataService.tablesEvent$.emit('holanai')
  }

  //Se llama cada vez que necesitemos actualizar el observador y que se muestre la nueva seleccion cada vez que se presiona
  ngOnDestroy() {
    this.suscription?.unsubscribe();
  }


}
