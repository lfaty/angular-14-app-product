import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compoments/home/home.component';
import { ProductAddComponent } from './compoments/product-add/product-add.component';
import { ProductEditComponent } from './compoments/product-edit/product-edit.component';
import { ProductsComponent } from './compoments/products/products.component';

const routes: Routes = [
  { path: "products", component:ProductsComponent}, 
  { path: "newProduct", component:ProductAddComponent}, 
  { path: "editProduct/:id", component:ProductEditComponent}, 
  { path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
