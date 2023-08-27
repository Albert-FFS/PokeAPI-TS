import getNewCard from './card.js';
import { Pokeapi } from './pokemon.js';
const urlAPI: string = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
const PokeBox  =<HTMLDivElement> document.getElementById('PokeBox');
export default function fetchPokemon(): void {
  fetch(urlAPI)
    .then(res => res.json())
    .then((res: Pokeapi) => {
      res.results.forEach((pokemon,key) => {
        const newCard : HTMLDivElement = getNewCard(pokemon.name,key);
        PokeBox.appendChild(newCard);
      })
    });
}