const urlSRC = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
export interface CardPokemon {
  Card: HTMLDivElement;
  Count: HTMLSpanElement;
  Image: HTMLImageElement;
  Legend: HTMLHeadingElement;
}
export default function getNewCard(pokemonName: string, id: number): HTMLDivElement {
  const Card: CardPokemon = {
    Card: document.createElement("div"),
    Count: document.createElement("span"),
    Image: document.createElement("img"),
    Legend: document.createElement("h3")
  };
  Card.Count.innerHTML = `Nº ${id + 1}`;
  Card.Legend.innerHTML = `${pokemonName.toUpperCase()}`;
  Card.Image.src = `${urlSRC}${id + 1}.png`;
  Card.Card.appendChild(Card.Count);
  Card.Card.appendChild(Card.Image);
  Card.Card.appendChild(Card.Legend);
  return Card.Card;
}