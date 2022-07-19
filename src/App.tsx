import React, {useState} from 'react';
import './App.css';
import {TopCars} from "./Components/TopCars";
import {Button} from "./Components/Button";
import {MoneyFilter} from "./Components/MoneyFilter";

export type FilterType = 'all' | 'dollars' | 'rubles';

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

    const [num, setNum] = useState<number>(0);

    const onClickNumHandler = () => {
        setNum(num + 1);
    }
    const onClickZeroHandler = () => {
        setNum(0);
    }

    //micro task 05 Filter method:

    const [money, setMoney] = useState([
        {banknotes: 'dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'rubles', value: 50, number: ' v1234567890'},
    ]);

    const [filter, setFilter] = useState<FilterType>('all');

    let currentMoney = money;
    if (filter === 'dollars') {
        currentMoney = money.filter(m => m.banknotes === 'dollars');
    }
    if (filter === 'rubles') {
        currentMoney = money.filter(m => m.banknotes === 'rubles');
    }

    const onclickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
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

            {/*micro task 05*/}
            <MoneyFilter currentMoney={currentMoney} onclickFilterHandler={onclickFilterHandler}
            />
        </div>
    );
}

export default App;
