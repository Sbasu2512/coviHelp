
import { Card } from "react-bootstrap";


import "./style.css";

// import Map from "./Map"


import Map from './Map'




export default function TestingLocation(props) {
  
  return (
    <div>
        <Map 
            data={
              {
                testingLocations : props.locations,
                userCoordinates : props.userCoordinates
              }
            }
          />
    </div>
  );
}