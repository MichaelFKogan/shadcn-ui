import React from 'react';
import countriesData from '../../data/citydata';
import { Badge } from "@/components/ui/badge";
import '../styles/group-badges.css'

function EssentialsBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("🏠 Accomodation") }}>
                🏠 Accomodation
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("✈️ Flights") }}>
                ✈️ Flights
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("😷 Health Insurance") }}>
                😷 Health Insurance
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("🗺 Maps") }}>
                🗺 Maps
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("🛂 Visa") }}>
                🛂 Visa
            </Badge>
        </>
    );
}

export default EssentialsBadges;
