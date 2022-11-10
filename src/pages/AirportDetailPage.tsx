import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "../axios";
import {IAirportDetails} from "../models/models";

const AirportDetailPage = () => {
    const params = useParams<'id'>()
    const [airport, setAirport] = useState<IAirportDetails | null>(null)
    const [loading, setLoading] = useState(true)

    async function fetchDetailAirport() {
        try {
            const response = await axios.get<IAirportDetails>(`airport${params.id}`)
            setAirport(response.data)
            setLoading(false)
        } catch(e: any) {
            throw new Error(e)
        }
    }

    useEffect(() => {
        fetchDetailAirport()
    }, [])

    if (loading) return <p className="text-center">Loading...</p>

    return (
        <div className={"container mx-auto pt-5 max-w-[760px]"}>
            <h1 className={"text-center text-2xl"}>{airport?.name}</h1>
            <p>{airport?.country}</p>
            <p>{airport?.region}</p>
            <p>{airport?.type}</p>
        </div>
    );
};

export default AirportDetailPage;