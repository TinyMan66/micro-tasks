import React from 'react';
import './App.css';
import {TopCars} from "./Components/TopCars";
import {Button} from "./Components/Button";

function App() {

    // micro task 02:

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    //micro task 03 universal button:

    const button1foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }

    const button2foo = (subscriber: string) => {
        console.log(subscriber);
    }

    return (
        <div className="App">
            <TopCars topCars={topCars}/>
            <Button name={'button1'} callBack={() => button1foo("I'm Ivan", 21, 'live in Moscow')}/>
            <Button name={'button2'} callBack={() => button2foo("I'm Dima")}/>
        </div>
    );
}

export default App;
