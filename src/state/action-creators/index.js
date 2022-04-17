export const deposit = (amount)=> {

    return function(dispatch) {
        dispatch({
            type : "deposit",
            payload : amount
        })
    }
};

export const withdraw = (amount)=> {

    return function(dispatch) {
        dispatch({
            type : "withdraw",
            payload : amount
        })
    }
};