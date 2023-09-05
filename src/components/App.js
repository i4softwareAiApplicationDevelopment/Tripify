import Form from './Form';
import Calendar from './Calendar';
import Weather from './Weather';
import { TravelPlanContext } from '../contexts/TravelPlanContext';
import { useContext } from 'react';

const App = () => {
  const { location } = useContext(TravelPlanContext);
    return (
      <div className="App">
          <h1>Welcome to Tripify!</h1>
          <Form />
          <Weather />
          {location && <Calendar />}
      </div>
    );
};

export default App;
