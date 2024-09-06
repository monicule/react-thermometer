import { useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  
  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="app">
      <h2>THERMOMETER</h2>
      <div className="counter-value">{counter}</div>
      <div className="buttons">        
          <button className="red" onClick={() => increase()}>+</button>              
          <button className="blue" onClick={() => decrease()}>-</button>        
        </div>
    </div>
  );
}