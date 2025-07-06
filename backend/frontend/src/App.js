import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityInfo from './components/CityInfo'; // Import the CityInfo component
import CityList from './components/CityList'; // Import the CityList component

function App() {
    return (
        <Router>
            <Routes>
                
                <Route path="/" element={<CityList />} />  {/* Homepage with city list */}
                <Route path="/city-info/:city" element={<CityInfo />} /> {/* City info page */}
            </Routes>
        </Router>
    );
}

export default App;
