//step-1 : create reducer

// const { createStore } = require("redux");
import { createStore } from "redux";


const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

//step-2 : create store
const store = createStore(reducer);

//step-3 : create subscriber
const counterSubscriber = () => {
    console.log("State changed:", store.getState());
};

//step-4 : subscribe to the store
store.subscribe(counterSubscriber);

//step-5 : create actions and action creators
const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });

//step-6 : dispatch actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());