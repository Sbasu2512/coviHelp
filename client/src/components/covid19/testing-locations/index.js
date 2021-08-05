import "./style.css";

// import Map from "./Map"

import axios from 'axios'
import { useEffect, useState } from "react";

import Map from './Map'



export default function TestingLocation(props) {
  
  const [locations, setLocations] = useState(null)
  

  useEffect (() => {
    axios.get('http://localhost:3000/api/testing_locations')
      .then(res => setLocations(res.data));
  }, [])
  
  
  return locations && <Map locations={{type: "testing-locations", data: locations}} />
}