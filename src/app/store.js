import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"; // as we have exported this as default we can change the name from counterSlice to 
import postReducer from "../features/posts/postSlice";
//counterReducer


const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
            posts: postReducer
            //if multiple reducers
            //todo: todosReducer
        }
    }
)

export default store;