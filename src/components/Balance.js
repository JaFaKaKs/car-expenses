import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const fuels = transactions.map(transaction => transaction.fuel);
  const distances = transactions.map(transaction => transaction.distance);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalFuel = fuels.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalDistance = distances.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const averageConsumption = ((totalFuel / totalDistance) * 100).toFixed(2);
  const averageExpensesPer100km = ((total / (totalDistance / 100))).toFixed(2);

  return (
    <>
      <h4>Total costs of refueling</h4>
      <h1>${total}</h1>
      <p>Average consumption per 100 kilometers: {averageConsumption}L</p>
      <p>Average expenses per 100 kilometers: {averageExpensesPer100km}€</p>
    </>
  )
}
