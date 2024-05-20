import './App.css';
import Card from './components/Card/Card.tsx';
import CardDeck from './lib/CardDeck.ts';

function App() {

  const deck = new CardDeck();
  const cards = deck.getCards(5);
  console.log(cards);

  return (
    <>
      <Card rank={'j'} suit={'spades'}/>
    </>
  );
}

export default App;