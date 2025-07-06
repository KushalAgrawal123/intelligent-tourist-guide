import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CityList = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        // Fetch list of cities from the backend
        axios
            .get('http://localhost:8000/api/cities/')
            .then((response) => {
                setCities(response.data); // Set the cities data to the state
            })
            .catch((error) => {
                console.error("Error fetching city list: ", error);
            });
    }, []);

    return (
        <div>
            <h1>Popular Cities</h1>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>
                        <Link to={`/city-info/${city}`}>{city}</Link> {/* Link to CityInfo page */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CityList;
