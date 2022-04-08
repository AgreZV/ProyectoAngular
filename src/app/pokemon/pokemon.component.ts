import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  name: string = '';
  urlImage: string = '';
  nick: string = '';
  id: string = '';
  
  
  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
  }

  search(){
    this.pokemonService.getPokemon(this.name).subscribe((data:any) => {
      console.log(data)
      this.urlImage = data.sprites.other.dream_world.front_default;
       this.nick = data.name;
       this.id = data.id;
    })
  }

  details(){
    this.pokemonService.getPokemon(this.name).subscribe((data:any) => {
      console.log(data)
    })
  }

}
