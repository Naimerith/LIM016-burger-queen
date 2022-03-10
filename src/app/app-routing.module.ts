import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefKitchenComponent } from './chef-kitchen/chef-kitchen.component';
import { HomeComponent } from './home/home.component';
import { WaiterMenuComponent } from './waiter-menu/waiter-menu.component';
import { WaiterTablesComponent } from './waiter-tables/waiter-tables.component';
import { WaiterOrdersComponent } from './waiter-orders/waiter-orders.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tables',
    component: WaiterTablesComponent
  },
  {
    path: 'menu',
    component: WaiterMenuComponent
  },
  {
    path: 'kitchen',
    component: ChefKitchenComponent
  },
  {
    path: 'orders',
    component: WaiterOrdersComponent
  },
  {
    path: 'register-user',
    component: SignUpComponent
  },
  {
    path: 'Login',
    component: SignInComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
