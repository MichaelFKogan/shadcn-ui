import React from 'react';
import countriesData from '../../data/citydata';
import { Badge } from "@/components/ui/badge";
import '../styles/group-badges.css'

function EssentialsBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <>

{filterKeyword !== "Essentials" ?
    <div className='continent-badges-list'> 
        <ul className="flex gap-x-2 gap-y-2 justify-center items-center">
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🏠 Accomodation") }}>
                🏠 Accomodation
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("✈️ Flights") }}>
                ✈️ Flights
            </Badge>
        </ul>
    </div>
    : null }
        </>
    );
}

export default EssentialsBadges;
