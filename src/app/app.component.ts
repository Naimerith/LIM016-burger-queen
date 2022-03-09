import { Component } from '@angular/core';
import { MenuService } from './services/menu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss']
})
export class AppComponent {
  constructor(public menuLuna:MenuService){

  }

}
