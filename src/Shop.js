import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from './state';

const Shop = () => {

  const dispatch = useDispatch();

  return (
    <div className="my-2">
        <h2>Deposit/Withdraw Money</h2>
        <button className="btn btn-primary mx-3" onClick={()=> dispatch(actionCreators.withdrawMoney(100))}>-</button>
        Update Balance
        <button className="btn btn-primary mx-3" onClick={()=> dispatch(actionCreators.depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop