import React from 'react';
import countriesData from '../../data/citydata';
import { Badge } from "@/components/ui/badge";
import '../styles/group-badges.css'

function ContinentBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <div className='group-badges-list my-2'>
                <ul>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("⛩ Asia") }}>
                        ⛩ Asia
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("💃🏻 Latin America") }}>
                        💃🏻 Latin America
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("🇪🇺 Europe") }}>
                        🇪🇺 Europe
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("🕌 Middle East") }}>
                        🕌 Middle East
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("🌊 Oceania") }}>
                        🌊 Oceania
                    </Badge>
                </ul>
        </div>
    );
}

export default ContinentBadges;
