import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shop } from "../../shop.component";
import { Router } from "@angular/router"

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() dataInput:Shop = {name:"",description:"",img:""};
  @Input() indexInput: number =0;
  @Output() selectShop: EventEmitter<any>;

  constructor(private router:Router) {this.selectShop = new EventEmitter(); }

  ngOnInit(): void {
  }
  
  buyProducto(){
    console.log(this.indexInput);
    this.selectShop.emit(this.indexInput);
  }

  detailShop(index:any){
    this.router.navigate(['/shop', index])
  }

}
