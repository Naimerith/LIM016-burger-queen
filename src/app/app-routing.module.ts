import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefKitchenComponent } from './chef-kitchen/chef-kitchen.component';
import { ChefOrdersReadyComponent } from './chef-orders-ready/chef-orders-ready.component';
import { HomeComponent } from './home/home.component';
import { WaiterMenuComponent } from './waiter-menu/waiter-menu.component';
import { WaiterTablesComponent } from './waiter-tables/waiter-tables.component';
import { WaiterOrdersComponent } from './waiter-orders/waiter-orders.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewBrokenComponent } from './components/view-broken/view-broken.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'tables',
    component: WaiterTablesComponent,
    canActivate: [AuthGuard] //controla si un usuario puede acceder a una ruta
  },
  {
    path: 'menu',
    component: WaiterMenuComponent,
    canActivate: [AuthGuard] //controla si un usuario puede acceder a una ruta

  },
  {
    path: 'cocina',
    component: ChefKitchenComponent,
    canActivate: [AuthGuard] //controla si un usuario puede acceder a una ruta
  },
  {
    path: 'pedidos',
    component: WaiterOrdersComponent,
    canActivate: [AuthGuard] //controla si un usuario puede acceder a una ruta
  },
  {
    path: 'cocinando',
    component: ChefOrdersReadyComponent,
    canActivate: [AuthGuard] //controla si un usuario puede acceder a una ruta
  },
  {
    path: 'Page Not Found',
    component: ViewBrokenComponent,
    // canActivate: [AuthGuard] //controla si un usuario puede acceder a una ruta
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
