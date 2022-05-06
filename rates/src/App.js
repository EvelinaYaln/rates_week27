
import { useState } from 'react';
import './App.css';
import Card from'./components/Card.jsx';

let cards = [{
  "heading":"300",
  "speed" : "10",
  "color" : "blue",
},{
  "heading":"450",
  "speed" : "50",
  "color" : "green",
},{
  "heading":"550",
  "speed" : "100",
  "isSelected" : true,
  "color" : "red",
},{
  "heading":"1000",
    "speed" : "200",
    "color" : "black",
  },
]
  
  
function App() {
  const [item, setCard] = useState();
  const handleClick= (item)=> {
    setCard(item);
  }
  return (
    <div className="App">
       {cards.map((card)=>
        <Card onClick={handleClick}
        heading={card.heading} speed={card.speed} isSelected={card.heading===item} color={card.color}></Card>
      )}
    </div>
  );
}

export default App;
