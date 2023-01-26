import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  //products?:Product[];
  products$:Observable<AppDataState<Product[]>> |null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private productsService:ProductsService, private router:Router) { }

  onGetAllProducts() {
    this.products$=this.productsService.getAllProducts()
      .pipe(
        map(data => ({dataState:DataStateEnum.LOADED,data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.err.message}))
        );
    }

  onGetSelectedProducts(){
    this.products$=this.productsService.getSelectedProducts()
      .pipe(
        map(data => ({dataState:DataStateEnum.LOADED,data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.err.message}))
        );
  }

  onGetAvailableProducts(){
    this.products$=this.productsService.getAvailableProducts()
      .pipe(
        map(data => ({dataState:DataStateEnum.LOADED,data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.err.message}))
        );
  }

  onSearch(dataForm: any){
    this.products$=this.productsService.searchProducts(dataForm.keyword)
      .pipe(
        map(data => ({dataState:DataStateEnum.LOADED,data:data})),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.err.message}))
        );
  }

  onSelect(p: Product){
    this.productsService.select(p)
      .subscribe(data=>{
        p.selected=data.selected;
      })
  }

  onDelete(p: Product){
    let v=confirm("Etes vous sûre ?")
    if(v==true)
    this.productsService.deleteProduct(p)
      .subscribe(data=>{
        this.onGetAllProducts();
      })
  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }

  onEdit(p:Product){
    this.router.navigateByUrl("/editProduct/"+p.id);
  }

}
