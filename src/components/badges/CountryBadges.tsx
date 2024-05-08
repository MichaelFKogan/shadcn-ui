import React from 'react';
import countriesData from '../../data/citydata';
import { Badge } from "@/components/ui/badge";
import '../styles/group-badges.css'

function CountryBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("⛩ Asia") }}>
                ⛩ Asia
            </Badge>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>

            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇹🇭 Thailand") }}>
                🇹🇭 Thailand
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇯🇵 Japan") }}>
                🇯🇵 Japan
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇮🇩 Indonesia") }}>
                🇮🇩 Indonesia
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇰🇷 Korea") }}>
                🇰🇷 Korea
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇻🇳 Vietnam") }}>
                🇻🇳 Vietnam
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇨🇳 China") }}>
                🇨🇳 China
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇭🇰 Hong Kong") }}>
                🇭🇰 Hong Kong
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇹🇼 Taiwan") }}>
                🇹🇼 Taiwan
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇸🇬 Singapore") }}>
                🇸🇬 Singapore
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇰🇭 Cambodia") }}>
                🇰🇭 Cambodia
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇱🇦 Laos") }}>
                🇱🇦 Laos
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇲🇲 Myanamar") }}>
                🇲🇲 Myanmar
            </Badge>
            <Badge variant="secondary" className="badge country-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇮🇳 India") }}>
                🇮🇳 India
            </Badge>
        </>
    );
}

export default CountryBadges;
