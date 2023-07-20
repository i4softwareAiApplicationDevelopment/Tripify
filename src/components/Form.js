import React, { useState, useContext } from 'react';
import { TravelPlanContext } from '../contexts/TravelPlanContext';

const Form = () => {
    const { setLocation, setDays } = useContext(TravelPlanContext);
    const [locationInput, setLocationInput] = useState('');
    const [daysInput, setDaysInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setLocation(locationInput);
        setDays(Number(daysInput));
        setLocationInput('');
        setDaysInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={locationInput} 
                onChange={(e) => setLocationInput(e.target.value)} 
                placeholder="Desination" 
                required
            />
            <input
                type="number"
                value={daysInput}
                onChange={(e) => setDaysInput(e.target.value)}
                placeholder="Days"
                min="1"
                required
            />
            <button type="submit">Plan your trip</button>
        </form>
    );
};

export default Form;
