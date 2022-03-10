import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent },
    { path: 'register-user', component: SignUpComponent },
    { path: 'dashboard', component: DashboardComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }