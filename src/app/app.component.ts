import 'isomorphic-fetch';
import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public message;
  public pokemon: Pokemon[] = [];

  constructor() {
    this.setMessage('test');
    // this.getWebService();
  }

  setMessage(newMessage: string) {
      this.message = newMessage;
  }

  clearMessage() {
    this.message = '';
  }

  getWebService() {
    const myNode = document.getElementById('Pokemon-Panel');
    myNode.style.display = 'block';

    fetch(environment.API_KEY).then(res => {
      res.json().then(data => {
        const val = data.results;
        val.map(el => {
          fetch(el.url).then(resp => {
            resp.json().then(pokemonResult => {
              const pokemonObject = new Pokemon(
                el.name, el.url,
                pokemonResult.sprites.back_default,
                pokemonResult.sprites.back_shiny,
                pokemonResult.sprites.front_default,
                pokemonResult.sprites.front_shiny,
                pokemonResult.weight
              );
              this.pokemon.push(pokemonObject)
            })
          })
        })
      })
      .catch(err => {
        console.log(err);
      })
    })
  }

  removePokemons() {
    const myNode = document.getElementById('Pokemon-Panel');
    myNode.style.display = 'none';
  }
}
