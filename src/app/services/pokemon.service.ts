import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlDog = 'https://random.dog/woof.json';
  urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  getDog():Observable<any>{
    return this.http.get(this.urlDog);
  }
  
  getPokemon(name: string){
    return this.http.get(this.urlPokemon + name)
  }
}
