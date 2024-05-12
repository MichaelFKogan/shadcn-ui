import React from 'react';
import countriesData from '../../data/citydata';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import '../styles/group-badges.css'

function ContinentBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <>
            <Badge variant="secondary" className="badge continent-badge text-sm rounded-md" onClick={() => { handleCountrySelection("⛩ Asia") }}>
                ⛩ Asia
            </Badge>
            <Badge variant="secondary" className="badge continent-badge text-sm rounded-md" onClick={() => { handleCountrySelection("💃🏻 Latin America") }}>
                💃🏻 Latin America
            </Badge>
            <Badge variant="secondary" className="badge continent-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🇪🇺 Europe") }}>
                🇪🇺 Europe
            </Badge>
            <Badge variant="secondary" className="badge continent-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🕌 Middle East") }}>
                🕌 Middle East
            </Badge>
            <Badge variant="secondary" className="badge continent-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🌊 Oceania") }}>
                🌊 Oceania
            </Badge>
        </>
    );
}

export default ContinentBadges;
