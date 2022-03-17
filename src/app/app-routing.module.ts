import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefKitchenComponent } from './chef-kitchen/chef-kitchen.component';
import { HomeComponent } from './home/home.component';
import { WaiterMenuComponent } from './waiter-menu/waiter-menu.component';
import { WaiterTablesComponent } from './waiter-tables/waiter-tables.component';
import { WaiterOrdersComponent } from './waiter-orders/waiter-orders.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tables',
    component: WaiterTablesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'menu',
    component: WaiterMenuComponent
  },
  {
    path: 'cocina',
    component: ChefKitchenComponent
  },
  {
    path: 'pedidos',
    component: WaiterOrdersComponent
  }, {
    path: 'registro',
    component: SignUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
