const urlSRC = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
export default function getNewCard(pokemonName, id) {
    const Card = {
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
