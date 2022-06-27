
export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            if (state === 0){
                return state = 0;
            }
            return state - 1;
        default:
            return state;
    }
}


