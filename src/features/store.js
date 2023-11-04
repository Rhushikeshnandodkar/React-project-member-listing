import { configureStore } from "@reduxjs/toolkit";
import jobCardReducer from "./Jobcard/jobCardSlice";
const store = configureStore({
    reducer: {
        jobcard: jobCardReducer
    }
})
export default store;