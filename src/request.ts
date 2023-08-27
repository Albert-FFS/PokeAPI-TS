const urlAPI: string = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
const urlSRC = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const PokeBox  =<HTMLDivElement> document.getElementById('PokeBox');
export interface Pokeapi {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}
export interface Result {
  name: string;
  url: string;
}
interface CardPokemon {
  Card: HTMLDivElement;
  Count: HTMLSpanElement;
  Image: HTMLImageElement;
  Legend: HTMLHeadingElement;
}




export default function fetchPokemon(): void {
  fetch(urlAPI)
    .then(res => res.json())
    .then((res: Pokeapi) => {
      res.results.forEach((pokemon,key) => {
        const newCard:CardPokemon= {
          Card : document.createElement("div"),
          Count : document.createElement("span"),
          Image : document.createElement("img"),
          Legend : document.createElement("h3")
        };
        newCard.Count.innerHTML = `Nº ${key+1}`;
        newCard.Legend.innerHTML =`${pokemon.name.toUpperCase()}`;
        newCard.Image.src = `${urlSRC}${key+1}.png`;
        newCard.Card.appendChild(newCard.Count);
        newCard.Card.appendChild(newCard.Image);
        newCard.Card.appendChild(newCard.Legend);
        PokeBox.appendChild(newCard.Card);
      })
    });
}