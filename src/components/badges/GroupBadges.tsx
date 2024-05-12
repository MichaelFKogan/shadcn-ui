import React from 'react';
import countriesData from '../../data/citydata';
import { Badge } from "@/components/ui/badge";
import '../styles/group-badges.css'

function GroupBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <>
            <Badge  variant="secondary" className="badge badge-category category-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("💯 Featured") }}>
                💯 Featured
            </Badge>
            <Badge  variant="secondary" className="badge badge-category category-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("📍 Essentials") }}>
                📍 Essentials
            </Badge>

            <Badge  variant="secondary" className="badge badge-category category-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("📸 Social Media") }}>
                📸 Social Media
            </Badge>
            <Badge  variant="secondary" className="badge badge-category category-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("👔 Jobs") }}>
                👔 Jobs
            </Badge>
            <Badge  variant="secondary" className="badge badge-category category-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("🏄‍♀️ Lifestyle") }}>
                🏄‍♀️ Lifestyle
            </Badge>
            <Badge  variant="secondary" className="badge badge-category category-badge text-sm rounded-md mr-2" onClick={() => { handleCountrySelection("📘 Learn") }}>
                📘 Learn
            </Badge>
        </>
    );
}

export default GroupBadges;
