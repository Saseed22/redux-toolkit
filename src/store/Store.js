import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './Slice'
 

const store = configureStore({
  reducer: {
    users:UserReducer,
  }
})

export default store;