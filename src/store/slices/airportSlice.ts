import {IAirport} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AirportState {
    loading: boolean
    error: string
    airports: IAirport[]
}

const initialState: AirportState = {
    loading: false,
    error: '',
    airports: []
}

export const airportSlice = createSlice({
    name: 'airport',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IAirport[]>) {
            state.loading = false
            state.airports = action.payload
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export default airportSlice.reducer