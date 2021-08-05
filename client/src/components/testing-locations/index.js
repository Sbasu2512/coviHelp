import "./style.css";

import Map from "./Map"

import testingLocations from "./data/locations"


export default function TestingLocation(props) {
  return <Map locations={{type: "testing-locations", data: testingLocations}}/>
}