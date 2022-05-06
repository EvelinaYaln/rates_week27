import { useState } from 'react';
import './Card.css';

function Card(props) {
  const [pressed, setPressed] = useState (false);
  const handleChange = () => {
    setPressed(!pressed);
    props.onClick(props.heading);
    
  }

  return (
    <div id="cardContainer">    
      <div className="card" onClick = {handleChange} >
        <div className= {"color "+((props.color==="black") && "black" || (props.color==="red") && "red" || (props.color==="green") && "green" || (props.color==="blue") && "blue")}>
            <h2 className ={"heading " +(props.isSelected ? "selected":"")}>Безлимитный {props.heading}</h2>
            <div className = "cost"><div className='cost-word'>руб</div> <span className='cost-num'>{props.heading}</span>/мес</div>
        </div>
        <div className = "content-speed">до {props.speed} Мбит/сек</div>
        <div className = {"content-rates "+(props.isSelected ? "selected":"")}>Объем включенного трафика не ограничен</div>
      </div>
    </div>
    );
  }
  
  export default Card;
