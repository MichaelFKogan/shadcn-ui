import React from 'react';
import countriesData from '../data/countriesData';
import { Badge } from "@/components/ui/badge";

function CountryFilter({ filterKeyword, handleCountrySelection }) {

    const filteredData = countriesData.filter(item =>
        item.country.toLowerCase() === filterKeyword.toLowerCase() || item.cities.some(city => city.name.toLowerCase() === filterKeyword.toLowerCase())
    );

    return (
        <div>
            {filteredData.map((item, index) => (
                <ul key={index}>
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

export default CountryFilter;
