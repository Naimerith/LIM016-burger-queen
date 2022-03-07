import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefKitchenComponent } from './chef-kitchen/chef-kitchen.component';
import { HomeComponent } from './home/home.component';
import { WaiterTablesComponent } from './waiter-tables/waiter-tables.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tables', component: WaiterTablesComponent },
  { path: 'kitchen', component: ChefKitchenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
