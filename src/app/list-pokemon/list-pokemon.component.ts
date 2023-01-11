import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList : Pokemon[]= POKEMONS;
  constructor(private router: Router){

  }
  goToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
  }
  /*pokemonSelected : Pokemon | undefined
  
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
  }*/
}
