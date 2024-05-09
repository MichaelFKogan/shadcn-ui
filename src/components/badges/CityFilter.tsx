import React from 'react';
import cityData from '../../data/cityData';
import { Badge } from "@/components/ui/badge";

function CityFilter({ filterKeyword, handleCountrySelection }) {

    const filteredData = cityData.filter(item =>
        item.country.toLowerCase() === filterKeyword.toLowerCase() || item.cities.some(city => city.name.toLowerCase() === filterKeyword.toLowerCase())
    );

    return (
        <>
            {filteredData.map((item, index) => (
                <>
                    {item.cities.map((city, cityIndex) => (
                        <>
                            <Badge key={cityIndex} variant="secondary" className="badge city-badge text-sm rounded-md" onClick={() => { handleCountrySelection(`${city.emoji} ${city.name}`) }}>
                                {city.emoji} {city.name}
                            </Badge>
                        </>
                    ))}
                </>
            ))}
        </>
    );
}

export default CityFilter;
