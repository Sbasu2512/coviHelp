import './style.css'

import TestingLocations from "./testing-locations/index"
import LoadingMap from "./LoadingMap/index"
import Dashboard from "./dashboard/index"
import GeneralInfo from "./general-info/index"

import {Card} from "react-bootstrap"

import StateProvider from '../../providers/StateProvider';

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
      {/* <StateProvider> */}
        <Card>
          <Card.Header><h2>Statistics Dashboard</h2></Card.Header>
          <Card.Body>
            <Dashboard />
          </Card.Body>
        </Card>

        <Card >
          <Card.Header><h2>Helpful Information</h2></Card.Header>
          <Card.Body className='home__map'>
            {testingLocations ? <TestingLocations userCoordinates={userCoordinates} locations={testingLocations}/> : <LoadingMap />}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header><h2>General Information</h2></Card.Header>
          <Card.Body>
            <GeneralInfo />
          </Card.Body>
        </Card>

      {/* </StateProvider> */}
    </div>
  );
};

export default Home;