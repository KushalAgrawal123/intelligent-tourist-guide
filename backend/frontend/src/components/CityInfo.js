import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CityInfo = () => {
    const { city } = useParams(); // Get the city from the URL
    const [cityInfo, setCityInfo] = useState(null);

    // Fetch city info from the backend
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/city-info/${city}/`) // Make sure the backend is running
            .then((response) => {
                setCityInfo(response.data);  // Set the city info to the state
            })
            .catch((error) => {
                console.error("Error fetching city info: ", error);
            });
    }, [city]);

    if (!cityInfo) {
        return <div>Loading...</div>;  // Display loading if data is not available
    }

    return (
        <div>
            <h1>{city} - Tourist Information</h1>
            <h2>Summary:</h2>
            <p>{cityInfo.summary}</p>
            <h2>Popular Places:</h2>
            <ul>
                {cityInfo.places.map((place, index) => (
                    <li key={index}>{place}</li>
                ))}
            </ul>
            <h2>Travel Tips:</h2>
            <ul>
                {cityInfo.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                ))}
            </ul>
            {cityInfo.images && cityInfo.images.length > 0 && (
    <div>
        <h2>Images:</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {cityInfo.images.map((url, index) => (
                <img
                    key={index}
                    src={url}
                    alt={`City view ${index}`}
                    style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
                />
            ))}
        </div>
    </div>
)}


        </div>
    );
};

export default CityInfo;
