import getNewCard from './card.js';
const urlAPI = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
const PokeBox = document.getElementById('PokeBox');
export default function fetchPokemon() {
    fetch(urlAPI)
        .then(res => res.json())
        .then((res) => {
        res.results.forEach((pokemon, key) => {
            const newCard = getNewCard(pokemon.name, key);
            PokeBox.appendChild(newCard);
        });
    });
}
