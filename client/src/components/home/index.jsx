import TestingLocations from "./testing-locations/index"
import Dashboard from "./dashboard/index"
import GeneralInfo from "./general-info/index"

import axios from 'axios'
import { useEffect, useState } from "react";

const Home = () => {
  
  const [testingLocations, setTestingLocations] = useState(null)
  const [userCoordinates, setUserCoordinates] = useState(null)

  useEffect (() => {
    axios.get('http://localhost:3000/api/testing_locations')
      .then(res => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setUserCoordinates([position.coords.latitude, position.coords.longitude])
          setTestingLocations(res.data.filter(location => 
            location.active !== null &&
            location.active !== 'No' &&
            location.latitude !== null &&
            location.longitude !== null &&
            location.latitude !== 0 &&
            location.longitude !== 0
          ));
        });
      });
    
  }, [])

  return (
    <div>
      <Dashboard />
      <GeneralInfo />
      {testingLocations && <TestingLocations userCoordinates={userCoordinates} locations={testingLocations}/>}
    </div>
  );
};

export default Home;