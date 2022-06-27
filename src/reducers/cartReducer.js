
export const cartReducer = (state = [], action) => {
    const product = action.payload
    switch (action.type) {
        case 'ADD_TO_CART':
            // check if item exist in cart
            const inCart = state.find(item => item.id === product.id)
            if(inCart){
                // increase item quantity
                return state.map(item => item.id === product.id ? {...item, qty: item.qty + 1}: item)
            }
            // Add to to cart
            else{
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            case 'REMOVE_FROM_CART':
                // check if item exist in cart
                const inCart1 = state.find(item => item.id === product.id)
                return state.filter(item => item.id !== inCart1.id)
        
            case 'INCREMENT':
                  
                    //    increase item quantity
                       return state.map(item => item.id === product.id? {...item, qty: item.qty + 1}: item);
            case 'DECREMENT':
           
                    //    decrease item quantity
                    if(product.qty === 1){
                        return state.map(item => item.id === product.id? {...item, qty: item.qty = 1}: item);
                    }
                       return state.map(item => item.id === product.id? {...item, qty: item.qty - 1}: item);
                  
            default:
                return state;
    }
}