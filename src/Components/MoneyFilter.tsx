import React from 'react';
import {Button} from "./Button";
import {FilterType} from "../App";

type MoneyType = {
    banknotes: string
    value: number
    number: string
}
type MoneyFilterType = {
    currentMoney: Array<MoneyType>
    onclickFilterHandler: (nameButton: FilterType) => void
}

export const MoneyFilter: React.FC<MoneyFilterType> = ({currentMoney, onclickFilterHandler}) => {
    return (
        <div>
            <ul>
                {currentMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknotes}</span>
                            <span>{m.value}</span>
                            <span>{m.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: '20px'}}><Button name={'ALL'} callBack={() => onclickFilterHandler('all')}/>
                <Button name={'RUBLES'} callBack={() => onclickFilterHandler('rubles')}/>
                <Button name={'DOLLARS'} callBack={() => onclickFilterHandler('dollars')}/></div>
        </div>
    );
};