import React from 'react';
import cityData from '../data/cityData';
import { Badge } from "@/components/ui/badge";

function CityFilter({ filterKeyword, handleCountrySelection }) {

    const filteredData = cityData.filter(item =>
        item.country.toLowerCase() === filterKeyword.toLowerCase() || item.cities.some(city => city.name.toLowerCase() === filterKeyword.toLowerCase())
    );

    return (
        <div>
            {filteredData.map((item, index) => (
                <ul key={index}>
                        <Badge variant="secondary" className="badge badge-category mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection("⛩ Asia") }}>
                            ⛩ Asia
                        </Badge>
                    {item.cities.map((city, cityIndex) => (
                        <Badge key={cityIndex} variant="secondary" className="badge badge-category mr-2 text-sm rounded-md" onClick={() => { handleCountrySelection(`${city.emoji} ${city.name}`) }}>
                            {city.emoji} {city.name}
                        </Badge>
                    ))}
                </ul>
            ))}
        </div>
    );
}

export default CityFilter;
