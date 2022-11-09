import {combineReducers, configureStore} from "@reduxjs/toolkit";
import airportReducer from './slices/airportSlice'

const rootReducer = combineReducers({
    airport: airportReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}