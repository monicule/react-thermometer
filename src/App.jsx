import "./App.css";
import "./index.css";
//import { Buttons } from "./components/buttons/Buttons";
//import { Temperature } from "./components/temperature/Temperature";
import { useState } from "react";

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
      <div className="counterValue" style={{backgroundColor}}>{counter} °C</div>
      <div className="buttons">        
          <button className="red" onClick={() => increase()}>+</button>              
          <button className="blue" onClick={() => decrease()}>-</button>        
      </div>
    </div>
  );
}

/*function App() {
  return (
    <>
    <Temperature />
    <Buttons />
    </>
  );
}

export default App;*/