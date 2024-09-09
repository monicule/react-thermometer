import { useState } from 'react';
import style from './Buttons.module.css';

export function Buttons() {
    const [counter, setCounter] = useState(0);
  
    const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

    return (
    <div className={style.buttons}>        
          <button className="red" onClick={() => increase()}>+</button>              
          <button className="blue" onClick={() => decrease()}>-</button>        
    </div> 
);
}

export default Buttons;