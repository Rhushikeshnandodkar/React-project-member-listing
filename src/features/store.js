import { configureStore } from "@reduxjs/toolkit";
import jobCardReducer from "./Jobcard/jobCardSlice";
import userReducer from "./Jobcard/userSlice"
const store = configureStore({
    reducer: {
        jobcard: jobCardReducer,
        user: userReducer
    }
})
export default store;