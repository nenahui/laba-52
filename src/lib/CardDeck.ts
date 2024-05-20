import Card from './Card.ts';

class CardDeck {
  cards: Card[];

  constructor() {
    this.cards = [];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['diams', 'hearts', 'clubs', 'spades'];

    for (const rank of ranks) {
      for (const suit of suits) {
        this.cards.push(new Card(rank, suit));
      }
    }
  }

  getCard(): Card {
    const randIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(randIndex, 1)[0];
  }

  getCards(howMany: number): Card[] {
    const newCards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      newCards.push(this.getCard());
    }
    return newCards;
  }
}

export default CardDeck;