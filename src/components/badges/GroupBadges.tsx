import React from 'react';
import countriesData from '../../data/citydata';
import { Badge } from "@/components/ui/badge";
import '../styles/group-badges.css'

function GroupBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <div className='group-badges-list my-2'>
                <ul>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("💯 Featured") }}>
                        💯 Featured
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("📍 Essentials") }}>
                        📍 Essentials
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("📸 Social Media") }}>
                        📸 Social Media
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("👔 Jobs") }}>
                        👔 Jobs
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("🏄‍♀️ Lifestyle") }}>
                        🏄‍♀️ Lifestyle
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("📘 Learn") }}>
                        📘 Learn
                    </Badge>
                </ul>
        </div>
    );
}

export default GroupBadges;
