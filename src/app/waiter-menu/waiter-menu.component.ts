import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-waiter-menu',
  templateUrl: './waiter-menu.component.html',
  styleUrls: ['./waiter-menu.component.scss']
})
export class WaiterMenuComponent implements OnInit {
  faCoffee = faCoffee;
  menuLuna: any = [] ;

  commensal = {
    name:'',
    tableNumber: '01'
  }

  changeCommensalName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.commensal.name = element.value;
  }

  constructor(private service: MenuService) { }

  ngOnInit(): void {
    this.service.getAllMenu().subscribe(menuLuna  => {
      this.menuLuna = menuLuna.menú;
      console.log(this.menuLuna)
    })
  }

}
