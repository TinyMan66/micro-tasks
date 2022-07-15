import React from 'react';

type TopCarsType = {
    topCars: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}
export const TopCars: React.FC<TopCarsType> = ({topCars}) => {

    return (
        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {topCars.map((c, index) =>
                <tr key={index}>
                    <td>{c.manufacturer}</td>
                    <td>{c.model}</td>
                </tr>
            )}
            </tbody>
        </table>

    );
};
