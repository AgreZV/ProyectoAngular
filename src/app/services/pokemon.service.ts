import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  
  urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  
  getPokemon(name: string){
    return this.http.get(this.urlPokemon + name)
  }
}
