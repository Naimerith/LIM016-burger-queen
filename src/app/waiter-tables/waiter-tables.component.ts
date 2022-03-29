import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiter-tables',
  templateUrl: './waiter-tables.component.html',
  styleUrls: ['./waiter-tables.component.scss']
})
export class WaiterTablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  selectTable(event: any) {
    const idTable = event.target.id;
    //Con localStorage
    localStorage.setItem("mesa", idTable);
  }

}
