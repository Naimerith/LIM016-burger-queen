import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WaiterTablesComponent } from './waiter-tables/waiter-tables.component';
import { ChefKitchenComponent } from './chef-kitchen/chef-kitchen.component';
import { ChefOrdersReadyComponent } from './chef-orders-ready/chef-orders-ready.component';
import { WaiterMenuComponent } from './waiter-menu/waiter-menu.component';
import { WaiterOrdersComponent } from './waiter-orders/waiter-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    WaiterTablesComponent,
    ChefKitchenComponent,
    ChefOrdersReadyComponent,
    WaiterMenuComponent,
    WaiterOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
