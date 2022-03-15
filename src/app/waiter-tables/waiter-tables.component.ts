import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-waiter-tables',
  templateUrl: './waiter-tables.component.html',
  styleUrls: ['./waiter-tables.component.scss']
})
export class WaiterTablesComponent implements OnInit {

  //traen los datos de booking.component.html
  @Input()
  table: any;
  selectedTable: any;

  constructor(private service: MenuService,
    private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.shareData.sharedMessage.subscribe(message => this.selectedTable = message)
  }

  updateStatusTable(){
    const idTable=this.table.id;
    console.log(idTable);
    const statusTable=this.table.status;
    const objTable = {status:statusTable};
    this.service.updateTable(idTable,objTable);
  }

  // envía información a ser transmitida desde el botón de Mesa
  sendSelectedTable() {
    // trae la data completa de la mesa y no solo el nombre
    this.shareData.nextMessage(this.table)
  }

}
