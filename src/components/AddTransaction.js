import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [distance, setDistance] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      fuel: +fuel,
      distance: +distance
    }

    addTransaction(newTransaction);
  }

  return (
    <div>
    <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Car model</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter car model..." />
        </div>
        <div className="form-control">
          <label htmlFor="fuel"
            >Fuel amount <br />
            (negative - expense, positive - income)</label
          >
        <input type="number" value={fuel} onChange={(e) => setFuel(e.target.value)} placeholder="Enter fuel amount..." />
        </div>
        <div>
        <label htmlFor="amount">Fuel price</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter fuel price...'/>
        </div>
        <div className='form-control'>
          <label htmlFor='distance'>Distance travelled</label>
          <input type='number' value={distance} onChange={(e) => setDistance(e.target.value)} placeholder='Enter distance travelled...'/>
        </div>
        <button className="btn">Add refueling expense</button>
      </form>
    </div>
  )
}
