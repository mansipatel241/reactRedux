export const depositMoney = (amount)=> {

    return function(dispatch) {
        dispatch({
            type : "deposit",
            payload : amount
        })
    }
};

export const withdrawMoney = (amount)=> {

    return function(dispatch) {
        dispatch({
            type : "withdraw",
            payload : amount
        })
    }
};