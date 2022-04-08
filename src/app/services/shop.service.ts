import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  private items:any = [
    {
      name:"Poke taza",
      description: "Taza de ceramica con forma de pokeball",
      img : "./assets/images/TazaPoke.jpg"
    },
    {
      name:"Peluche Pikachu",
      description: "Adorable peluche de pikachu",
      img : "./assets/images/PeluchePika.png"
    },
    {
      name:"Poster Pokemon",
      description: "Poster Mural de Pokemon",
      img : "./assets/images/poster.jpg"
    },
    {
      name:"Pijama Snorlax",
      description: "Divertido pijama snorlax",
      img : "./assets/images/pijama.jpg"
    }

  ];

  constructor(private http:HttpClient) { }

  getData(){
    return this.items;
  }
  getProducto(id:any){
    return this.items[id]
  }
  
}
