import React, {useEffect, useState} from 'react';
import {useInput} from "../hook/input";
import {useDebounce} from "../hook/debounce";
import axios from "../axios";
import {IAirport, ServerResponse} from "../models/models";
import {useNavigate} from "react-router-dom";

const AirportSearch = () => {
    const navigate = useNavigate()
    const input = useInput()
    const [dropdown, setDropdown] = useState(false)
    const [airports, setAirports] = useState<IAirport[]>([])
    const debounced = useDebounce<string>(input.value, 400)

    async function searchAirports() {
        const response = await axios.get<ServerResponse<IAirport>>('data', {
            params: {
                search: debounced,
                count: 10
            }
        })
        setAirports(response.data.results)
    }

    useEffect(() => {
        if(debounced.length > 3) {
            searchAirports().then(() => setDropdown(true))
        } else {
            setDropdown(false)
        }
    }, [debounced])

    return (
        <div className={"mb-4 relative"}>
            <input
                type="text"
                placeholder={"Type something here..."}
                className={"border py-2 px-4 outline-0 w-full h-[42px]"}
                {...input}
            />

            {dropdown && <ul className={"list-none absolute left-0 right-0 h-[200px] top-[42px] shadow-md bg-white overflow-y-scroll"}>
                {
                    airports.map(airport => (
                        <li
                            key={airport.id}
                            className={"py-2 px-4 mb-2 hover:bg-gray-500 hover:transition-colors cursor-pointer hover:text-white"}
                            onClick={() => navigate(`/airport/${airport.id}`)}
                        >
                            {airport.name}
                        </li>
                    ))
                }
            </ul>}

        </div>
    );
};

export default AirportSearch;