import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './compoments/nav-bar/nav-bar.component';
import { ProductsComponent } from './compoments/products/products.component';
import { HomeComponent } from './compoments/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './compoments/product-add/product-add.component';
import { ProductEditComponent } from './compoments/product-edit/product-edit.component';
import { ProductsNavBarComponent } from './compoments/products/products-nav-bar/products-nav-bar.component';
import { ProductsListComponent } from './compoments/products/products-list/products-list.component';
import { ProductItemComponent } from './compoments/products/products-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
