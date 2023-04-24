import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';


export const BalanceHistory = () => {
    const { transactions } = useContext(GlobalContext)

    const valuesList = transactions.map(item => [item.text, item.fuel, item.amount, item.distance]);

  return (
    <div>
    <h2>Fueling History</h2>
    <ul className="list">
      {valuesList.map(item => (
        <li key={item[0]}>
            Car: {item[0]} - Fuel amount: {item[1]} - <br></br>Fuel Price: {item[2]} - Distance Travelled: {item[3]} - <br></br>Cost per 100km: {(item[2]/item[3]).toFixed(3)}€ - <br></br>Consumption per 100km: {(item[3]/item[1]).toFixed(2)}L
        </li>
      ))}
        
      </ul>
    </div>
  )
}
