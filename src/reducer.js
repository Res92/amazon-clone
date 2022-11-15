export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);

    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item form basket

            // we cloned the basket
            let newBasket = [...state.basket];

            // we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                //item exits in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its `
                )
            }

            return {
                ...state,
                basket: newBasket,
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;
