
import { Card } from "react-bootstrap";


import "./style.css";

// import Map from "./Map"


import Map from './Map'




export default function Locations(props) {
  
  return (
    <div>
        <Map 
            data={
              {
                testingLocations : props.locations.testing,
                vaccinationLocations : props.locations.vaccination,
                userCoordinates : props.userCoordinates
              }
            }
          />
    </div>
  );
}