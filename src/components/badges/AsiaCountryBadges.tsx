import React from 'react';
import countriesData from '../../data/citydata';
import { Badge } from "@/components/ui/badge";
import '../styles/group-badges.css'

function AsiaCountryBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <>

{filterKeyword !== "Thailand" && filterKeyword !== "Bangkok" && filterKeyword !== "Chiang Mai" && filterKeyword !== "Japan" && filterKeyword !== "Indonesia" && filterKeyword !== "Ubud" && filterKeyword !== "Bali" ? 
    <div className='continent-badges-list'> 
        <ul className="flex gap-x-2 gap-y-2 justify-center items-center">
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
        </ul>
    </div>
    : null }
        </>
    );
}

export default AsiaCountryBadges;
