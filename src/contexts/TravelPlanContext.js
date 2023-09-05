import React, { createContext, useState } from 'react';

export const TravelPlanContext = createContext();

export const TravelPlanProvider = ({ children }) => {
    const [location, setLocation] = useState('');
    const [days, setDays] = useState(1);
    const [plans, setPlans] = useState({});

    const addPlan = (date, plan) => {
        setPlans((prev) => ({
            ...prev,
            [date]: [...(prev[date] || []), plan],
        }));
    };

    const removePlan = (date, index) => {
        setPlans((prev) => {
            const newPlans = [...prev[date]];
            newPlans.splice(index, 1);
            return { ...prev, [date]: newPlans };
        });
    };

    return (
        <TravelPlanContext.Provider value={{ location, setLocation, days, setDays, plans, addPlan, removePlan }}>
            {children}
        </TravelPlanContext.Provider>
    );
};
