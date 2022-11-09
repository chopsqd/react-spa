import React, {useEffect} from 'react';
import AirportSearch from "../components/AirportSearch";
import AirportFilter from "../components/AirportFilter";
import AirportCard from "../components/AirportCard";
import {fetchAirports} from "../store/actions/airportActions";
import {useAppDispatch, useAppSelector} from "../hook/redux";

const MainPage = () => {
    const dispatch = useAppDispatch()
    const {error, loading, airports} = useAppSelector(state => state.airport)

    useEffect(() => {
        dispatch(fetchAirports())
    }, [])

    return (
        <div className={"container mx-auto max-w-[760px] pt-5"}>
            <AirportSearch/>
            <AirportFilter/>

            {loading && <p className="text-center text-lg">Loading...</p>}
            {error && <p className="text-center text-lg text-red-600">{error}</p>}

            {
                airports.map(airport => <AirportCard airport={airport} key={airport.id}/>)
            }
        </div>
    );
};

export default MainPage;