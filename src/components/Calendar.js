import React, { useContext } from 'react';
import { TravelPlanContext } from '../contexts/TravelPlanContext';

const Calendar = () => {
    const { days, plans, addPlan, removePlan } = useContext(TravelPlanContext);
    const daysOfVacation = Array.from({ length: days }, (_, i) => i + 1);

    const handleAddPlan = (date) => {
        const plan = window.prompt('What is your plan?');
        if (plan) {
            addPlan(date, plan);
        }
    };

    const handleRemovePlan = (date, index) => {
        if (window.confirm('Are you sure you want to delete this plan?')) {
            removePlan(date, index);
        }
    };

    return (
        <div className="calendar">
            {daysOfVacation.map((day) => (
                <div className="calendar-day" key={day}>
                    <h2>{`Day ${day}`}</h2>
                    <div className='calendar-plans'>
                        {(plans[day] || []).map((plan, index) => (
                            <div className="plans" key={index}>
                                <p>{plan}</p>
                                <button onClick={() => handleRemovePlan(day, index)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => handleAddPlan(day)}>Add Plan</button>
                </div>
            ))}
        </div>
    );
};

export default Calendar;
