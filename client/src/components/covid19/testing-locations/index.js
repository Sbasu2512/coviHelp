import { useState } from 'react';

import "./style.css";

// import Map from "./Map"


import Map from './Map'




export default function TestingLocation(props) {
  
  return (
    <Map 
      data={
        {
          testingLocations : props.locations,
          userCoordinates : props.userCoordinates
        }
      }
    />
  );
}