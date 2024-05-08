import React from 'react';
import cityData from '../../data/cityData';
import { Badge } from "@/components/ui/badge";

function CityFilter({ filterKeyword, handleCountrySelection }) {

    const filteredData = cityData.filter(item =>
        item.country.toLowerCase() === filterKeyword.toLowerCase() || item.cities.some(city => city.name.toLowerCase() === filterKeyword.toLowerCase())
    );

    return (
        <>
            {filteredData.length > 0 ? 
            <>
                <Badge variant="secondary" className="badge continent-badge text-sm rounded-md" onClick={() => { handleCountrySelection("⛩ Asia") }}>
                    ⛩ Asia
                </Badge>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </>
                : null}
            
            {filteredData.map((item, index) => (
                <>
                    {item.cities.map((city, cityIndex) => (
                        <>
                            <Badge key={cityIndex} variant="secondary" className="badge city-badge text-sm rounded-md" onClick={() => { handleCountrySelection(`${city.emoji} ${city.name}`) }}>
                                {city.emoji} {city.name}
                            </Badge>

                            {city.name.toLowerCase() === "thailand" || city.name.toLowerCase() === "japan" || city.name.toLowerCase() === "indonesia"  ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            ) : null}
                        </>
                    ))}
                </>
            ))}
        </>
    );
}

export default CityFilter;
