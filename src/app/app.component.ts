import { Component, OnInit } from '@angular/core';
import {POKEMONS} from './mock-pokemon-list'
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit{
  pokemonList : Pokemon[]= POKEMONS;
  pokemonSelected : Pokemon | undefined
  
  ngOnInit() {
    console.table(this.pokemonList);
    //this.selectPokemon(this.pokemonList[3]);
  }
  selectPokemon(pokemonId: string){
    const pokemon : Pokemon|undefined = this.pokemonList.find(pokemon=>pokemon.id==+pokemonId);
    //const index: number = +(event.target as HTMLInputElement).value
    if(pokemon){
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }else{
      console.log("vous avez demandé un pokemon qui n'existe pas");
      this.pokemonSelected = pokemon;
    }
  }
}
