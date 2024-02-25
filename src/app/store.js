import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"; // as we have exported this as default we can change the name from counterSlice to 
//counterReducer

const store = configureStore(
    {
        reducer: {
            counter: counterReducer
            //if multiple reducers
            //todo: todosReducer
        }
    }
)

export default store;