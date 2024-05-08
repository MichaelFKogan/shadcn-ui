import React from 'react';
import countriesData from '../../data/citydata';
import { Badge } from "@/components/ui/badge";
import '../styles/group-badges.css'

function GroupBadges({ filterKeyword, handleCountrySelection }) {

    return (
        <div className='group-badges-list my-2 flex items-center gap-x-4'>
            {/* <p className="w-20 text-sm">Categories</p> */}
            <ul className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                    <Badge variant="secondary" className="badge group-badge text-sm rounded-md" onClick={() => { handleCountrySelection("💯 Featured") }}>
                        💯 Featured
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge text-sm rounded-md" onClick={() => { handleCountrySelection("📍 Essentials") }}>
                        📍 Essentials
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge text-sm rounded-md" onClick={() => { handleCountrySelection("📸 Social Media") }}>
                        📸 Social Media
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge text-sm rounded-md" onClick={() => { handleCountrySelection("👔 Jobs") }}>
                        👔 Jobs
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge text-sm rounded-md" onClick={() => { handleCountrySelection("🏄‍♀️ Lifestyle") }}>
                        🏄‍♀️ Lifestyle
                    </Badge>
                    <Badge variant="secondary" className="badge group-badge text-sm rounded-md" onClick={() => { handleCountrySelection("📘 Learn") }}>
                        📘 Learn
                    </Badge>
                </ul>
        </div>
    );
}

export default GroupBadges;
