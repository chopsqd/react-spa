import axios from "../../axios";
import {AppDispatch} from "../index";
import {handbookSlice} from "../slices/handbookSlice";
import {IAirportCountry, IAirportRegion, IAirportType} from "../../models/models";

export const fetchHandbooks = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(handbookSlice.actions.fetching())
            const response = await Promise.all([
                axios.get<IAirportType[]>('airport-types'),
                axios.get<IAirportRegion[]>('regions'),
                axios.get<IAirportCountry[]>('countries')
            ])
            dispatch(handbookSlice.actions.fetchSuccess({
                types: response[0].data,
                regions: response[1].data,
                countries: response[2].data
            }))
        } catch (e: any) {
            throw new Error(e.message)
        }
    }
}