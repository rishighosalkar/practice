//import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter +=action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

const initialAuthState = {isAuthenticated: false}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})
/*const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
            showCounter: !state.showCounter
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            showCounter: !state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return state;
}*/

//const store = createStore(counterReducer);
const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        authReducer: authSlice.reducer
    }
})

export const counterAction = counterSlice.actions;
export const authActions = authSlice.actions
export default store;