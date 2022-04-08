import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../../services/shop.service';

@Component({
  selector: 'app-detailshop',
  templateUrl: './detailshop.component.html',
  styleUrls: ['./detailshop.component.css']
})
export class DetailshopComponent implements OnInit {

  shop: any;
  constructor(private activateRouter: ActivatedRoute, private shopService : ShopService) {

  this.activateRouter.params.subscribe( data => {      
      this.shop = this.shopService.getProducto(data['id']);
      console.log(this.shop);
    });
  }

  ngOnInit(): void {
  }

}
