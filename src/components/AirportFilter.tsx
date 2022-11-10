import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {IFilter} from "../models/models";
import {airportSlice} from "../store/slices/airportSlice";

const AirportFilter = () => {
    const dispatch = useAppDispatch()
    const {loading, regions, countries, types} = useAppSelector(state => state.handbook)
    const [hasFilter, setHasFilter] = useState(false)
    const [filter, setFilter] = useState<IFilter>({
        type: '',
        country: '',
        region: ''
    })

    useEffect(() => {
        if(filter.type || filter.region || filter.country) {
            setHasFilter(true)
        } else {
            setHasFilter(false)
        }

        dispatch(airportSlice.actions.filter(filter))
    }, [filter])

    const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilter(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const clearFilter = () => {
        setFilter({
            type: '',
            country: '',
            region: ''
        })
    }

    if(loading) return <p className="text-center">Loading...</p>

    return (
        <div className={"border py-2 px-4 mb-2"}>
            <span className={"font-bold mr-2"}>Filter</span>

            <select
                name="type"
                className={"mr-2 border py-1 px-2"}
                onChange={changeHandler}
                value={filter.type}
            >
                <option value="" disabled>Type</option>
                {types.map(type => <option key={type}>{type}</option>)}
            </select>

            <select
                name="country"
                className={"mr-2 border py-1 px-2"}
                onChange={changeHandler}
                value={filter.country}
            >
                <option value="" disabled>Country</option>
                {countries.map(country => <option key={country}>{country}</option>)}
            </select>

            <select
                name="region"
                className={"mr-2 border py-1 px-2"}
                onChange={changeHandler}
                value={filter.region}
            >
                <option value="" disabled>Region</option>
                {regions.map(region => <option key={region}>{region}</option>)}
            </select>

            {hasFilter && <button
                className={"ml-4 py-1 px-4 bg-red-700 text-white rounded"}
                onClick={clearFilter}
            >&times;</button>}
        </div>
    );
};

export default AirportFilter;