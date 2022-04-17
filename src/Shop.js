import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from './state';

const Shop = () => {

  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  const balance = useSelector(state=> state.amount);
  return (
    <div className="my-2">
        <h2>Deposit/Withdraw Money</h2>
        <button className="btn btn-primary mx-3" onClick={()=> withdrawMoney(100)}>-</button>
        Update Balance : {balance}
        <button className="btn btn-primary mx-3" onClick={()=> depositMoney(100)}>+</button>
    </div>
  )
}

export default Shop