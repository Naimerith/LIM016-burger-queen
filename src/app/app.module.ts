import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { WaiterTablesComponent } from './waiter-tables/waiter-tables.component';
import { ChefKitchenComponent } from './chef-kitchen/chef-kitchen.component';
import { ChefOrdersReadyComponent } from './chef-orders-ready/chef-orders-ready.component';
import { WaiterMenuComponent } from './waiter-menu/waiter-menu.component';
import { WaiterOrdersComponent } from './waiter-orders/waiter-orders.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { HeaderComponent } from './header/header.component';
import { ModalComponentComponent } from './modal-component/modal-component.component';

//importaciones para leer data en json
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WaiterTablesComponent,
    ChefKitchenComponent,
    ChefOrdersReadyComponent,
    WaiterMenuComponent,
    WaiterOrdersComponent,
    HeaderComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
