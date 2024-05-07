import React from 'react';
import countriesData from '../data/citydata';
import { Badge } from "@/components/ui/badge";
import './styles/group-badges.css'

function CountryBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <div className='group-badges-list my-2'>
                <ul>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("Thailand") }}>
                        Thailand
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("Indonesia") }}>
                        Indonesia
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("Japan") }}>
                        Japan
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("Korea") }}>
                        Korea
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("Vietnam") }}>
                        Vietnam
                    </Badge>
                </ul>
        </div>
    );
}

export default CountryBadges;
