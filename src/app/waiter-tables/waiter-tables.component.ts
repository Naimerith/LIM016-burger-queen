import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-waiter-tables',
  templateUrl: './waiter-tables.component.html',
  styleUrls: ['./waiter-tables.component.scss']
})
export class WaiterTablesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  selectTable() {
    //this.dataService.tablesEvent$.emit('holanai')
    console.log('Seleccionaste una mesa')
  }

}
