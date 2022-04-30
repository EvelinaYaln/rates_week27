
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
  return (
    <div className="App">
       {cards.map((card)=>
        <Card heading={card.heading} speed={card.speed} isSelected={card.isSelected} color={card.color}></Card>
      )}
    </div>
  );
}

export default App;
