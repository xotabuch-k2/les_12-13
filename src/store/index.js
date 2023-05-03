import { legacy_createStore } from 'redux'

const couterReducer = (state = {coffee: 0, sugar: 0, isLoggedIn: false,}, action) => {
    if (action.type === 'incrementCoffee'){
        return {
            ...state,
           coffee: state.coffee + 1,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'decrementCoffee'){
        return {
            ...state,
           coffee: state.coffee - 1,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'increase'){
        return {
            ...state,
           coffee: state.coffee + action.number,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if(action.type === 'logIn'){
        return {
            ...state,
            coffee: state.coffee,
            isLoggedIn: true,
         }
    }

    if (action.type === 'incrementSugar'){
        return {
            ...state,
            sugar: state.sugar + 1,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'decrementSugar'){
        return {
            ...state,
            sugar: state.sugar - 1,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if (action.type === 'increaseS'){
        return {
            ...state,
            sugar: state.sugar + action.number,
           isLoggedIn: state.isLoggedIn,
        }
    }
    if(action.type === 'logIn'){
        return {
            ...state,
            sugar: state.sugar,
            isLoggedInS: true,
         }
    }
    if(action.type === 'logOut'){
        return {
            ...state,
            isLoggedIn: false,
         }
    }
    if(action.type === 'resetList'){
        return{
            coffee:0,
            super:0,
            isLoggedIn: state.isLoggedIn,
        }
    }
    return state
}

const store = legacy_createStore(couterReducer); 

export default store;