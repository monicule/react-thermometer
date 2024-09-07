import { useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const backgroundColor = counter < 0 ? 'blue' : counter > 0 ? 'red' : 'lightgrey';
    
  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  
    return (
    <div className="app">
      <h2>THERMOMETER</h2>
      <div className="counter-value" style={{backgroundColor}}>{counter} °C</div>
      <div className="buttons">        
          <button className="red" onClick={() => increase()}>+</button>              
          <button className="blue" onClick={() => decrease()}>-</button>        
        </div>
    </div>
  );
}