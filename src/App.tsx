import React, {useState} from 'react';
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

    //micro task 04 hook useState:

    let [num, setNum] = useState<number>(0);

    const onClickNumHandler = () => {
        setNum(++num);
    }
    const onClickZeroHandler = () => {
        setNum(0);
    }

    return (
        <div className="App">
            {/*micro task 02*/}
            <TopCars topCars={topCars}/>

            {/*micro task 03*/}
            <Button name={'button1'} callBack={() => button1foo("I'm Ivan", 21, 'live in Moscow')}/>
            <Button name={'button2'} callBack={() => button2foo("I'm Dima")}/>

            {/*micro task 04*/}
            <h1>{num}</h1>
            <Button name={'number'} callBack={onClickNumHandler}/>
            <Button name={'0'} callBack={onClickZeroHandler}/>
        </div>
    );
}

export default App;
