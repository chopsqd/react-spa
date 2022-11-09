import React from 'react';
import AirportSearch from "../components/AirportSearch";
import AirportFilter from "../components/AirportFilter";
import AirportCard from "../components/AirportCard";

const MainPage = () => {

    return (
        <div className={"container mx-auto max-w-[760px] pt-5"}>
            <AirportSearch/>
            <AirportFilter/>
            <AirportCard/>
        </div>
    );
};

export default MainPage;