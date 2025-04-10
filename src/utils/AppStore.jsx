import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import MoviesReducer from "./MoviesSlice"
import gptSearchReducer from "./GptSearchSlice";
import configReducer from "./ConfigSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: MoviesReducer,
        gptSearch : gptSearchReducer,
        config : configReducer,
    }
})

export default appStore;