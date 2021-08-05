import "./style.css";

// import Map from "./Map"

import axios from 'axios'





export default function TestingLocation(props) {
  // return <Map locations={{type: "testing-locations", data: testingLocations}}/>
  
  
  
  const getTestingLocations = () => {

    axios.get('http://localhost:3000/api/testing_locations')
      .then(res => console.log(res.data))
  }
  
  
  
  return <div>{getTestingLocations()}</div>
}