import './style.css'

import TestingLocations from "./home/testing-locations/index"
import LoadingMap from "./home/LoadingMap/index"
import Dashboard from "./home/dashboard/index"

import {Card} from "react-bootstrap"

import StateProvider from '../../providers/StateProvider';

import axios from 'axios'
import { useEffect, useState } from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


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
    <main>
      {/* <StateProvider> */}
        <Card>
          <Card.Header><h2>Alerts, messages, latest updates...</h2></Card.Header>
          <Card.Body>
            Loading...
          </Card.Body>
        </Card>

        <Card>
          <Card.Header><h2>Dashboard</h2></Card.Header>
          <Card.Body>
            Loading...
            <Dashboard />
          </Card.Body>
        </Card>

        <Card >
          <Card.Header><h2>Around you</h2></Card.Header>
          <Card.Body className='home__map'>
            {testingLocations ? <TestingLocations userCoordinates={userCoordinates} locations={testingLocations}/> : 
              <Loader
                type="Rings"
                color="lightcoral"
                height={500}
                width={500}
              />
            }
          </Card.Body>
        </Card>

        <Card>
          <Card.Header><h2>General information, external links...</h2></Card.Header>
          <Card.Body>
            Loading...
          </Card.Body>
        </Card>

      {/* </StateProvider> */}
    </main>
  );
};

export default Home;