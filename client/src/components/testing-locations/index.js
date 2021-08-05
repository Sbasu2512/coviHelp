import "./style.css";

// import Map from "./Map"

import axios from 'axios'





export default function TestingLocation(props) {
  // return <Map locations={{type: "testing-locations", data: testingLocations}}/>
  
  
  
  const getTestingLocations = () => {

    axios.get('localhost:3000/api/testing_locations')
      .then(data => console.log(data))
  }
  
  
  
  return <div>{getTestingLocations()}</div>
}