import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const liters = transactions.map(transaction => transaction.fuel);
  const kilometers = transactions.map(transaction => transaction.distance)
 const income = liters
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    kilometers.filter(item => item > 0).reduce((acc, item) => (acc += item), 0) *
    1
  ).toFixed(2);



  return (
    <div className="inc-exp-container">
        <div>
          <h4>Total Liters fueled:</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Total Kilometers travelled</h4>
          <p className="money plus">{expense}</p>
        </div>
      </div>
  )
}
