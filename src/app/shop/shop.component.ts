import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

export interface Shop {
  name: string,
  description: string,
  img:string
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: Shop [] = [];
  carrito: Shop [] = [];
  local:any = []

  constructor(private shopService : ShopService) { }

  ngOnInit(): void {
    this.setUp();    
  }

  setUp(){
    this.items = this.shopService.getData();
  }
  
  addCarrito(element:any){
    console.log("se agrego el producto al carrito", element);
    this.carrito.push(element);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

    getShopv2(id:any){        
    console.log(id);
  }

}
