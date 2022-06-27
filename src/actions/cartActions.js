export const addToCart = (product) => {
    return{
        type: 'ADD_TO_CART',
        payload: product,
    }
   
}

export const removeFromCart = (product) => {
    return{
        type: 'REMOVE_FROM_CART',
        payload:product,
    }
   
}

export const increaseQty = (product) => {
    return {
        type: 'INCREMENT',
        payload:product,
    }
}


export const decreaseQty = (product) => {
    return {
        type: 'DECREMENT',
        payload:product,
    }
}