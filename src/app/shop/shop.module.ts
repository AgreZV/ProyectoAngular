import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { DetailshopComponent } from './pages/detailshop/detailshop.component';


@NgModule({
  declarations: [
    ShopComponent,
    CarritoComponent,
    ProductoComponent,
    DetailshopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
