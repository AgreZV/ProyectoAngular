import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ShopService } from '../../../services/shop.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Input() data:any;
  @Input() indexElement:any;
  shop:any;  
  @Output() gameDelete: EventEmitter<any>;

  constructor(private srvShop: ShopService) {this.gameDelete = new EventEmitter();}

  ngOnInit(): void {
    console.log(this.data)
     this.shop = this.srvShop.getProducto(this.data)
    // this.srvShop.getShopv2(this.data).subscribe(resp =>{
    //   let respService:any = resp;
    //   this.shop = respService.mensaje;
    //   console.log(this.shop)
    // })
  }

  deleteElement(index:any){     
    this.gameDelete.emit(index);
  }

}
