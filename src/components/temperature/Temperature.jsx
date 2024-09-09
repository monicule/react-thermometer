import style from './Temperature.module.css';
import { useState } from 'react';
import { counter} from '../buttons/Buttons';

export function Temperature () {
const backgroundColor = counter < 0 ? 'blue' : counter > 0 ? 'red' : 'lightgrey';

return (
    <div className="app">
    <h2>THERMOMETER</h2>
    <div className={style.counterValue} style={{backgroundColor}}>{counter} °C</div>
    </div>
);
}

export default Temperature;