import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
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
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ViewBrokenComponent } from './components/view-broken/view-broken.component';


// Auth service
import { AuthService } from "./services/auth.service";

//importaciones para leer data en json
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { TemplateProductsComponent } from './template-products/template-products.component';

import { WaiterCounterComponent } from './components/waiter-counter/waiter-counter.component';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat'; //Para enlazar con el proyecto en firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { HeaderChefComponent } from './header-chef/header-chef.component';
import { FilterByDatePipe } from './filter-by-date.pipe';

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
    ModalComponentComponent,
    SignInComponent,
    TemplateProductsComponent,
    WaiterCounterComponent,
    HeaderChefComponent,
    ViewBrokenComponent,
    FilterByDatePipe
  ],
  exports: [
    WaiterTablesComponent,
    WaiterMenuComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig), //Aqui inicializamos firebase
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,

    // OJO 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }

}
