

import './map.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import L from 'leaflet';

import "leaflet/dist/leaflet.css"

import icon from './img/marker-icon.png';
import iconVaccine from './img/syringe.png';
import iconTesting from './img/covid-test.png';
import iconShadow from './img/marker-shadow.png';

const userIcon = new L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const vaccineIcon = new L.icon({
  iconUrl: iconVaccine,
  iconSize: [32, 32],
  iconAnchor: [0, 32]
});

const testingIcon = new L.icon({
  iconUrl: iconTesting,
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});



function Map(props) {

  const { userCoordinates, testingLocations, vaccinationLocations} = props.data;

  return (
    <div className="map">
      <div>
        <img src={iconTesting} /> Testing location
        <span> </span>
        <img src={iconVaccine} /> Vaccination site
      </div>
      <MapContainer center={userCoordinates} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={userCoordinates} icon={userIcon} ><Popup>You are here!</Popup></Marker>
        {
          testingLocations && testingLocations.map(location =>
            <Marker
              position={[location.latitude, location.longitude]}
              icon={testingIcon}
              key={`location${location.id}`}
            >
              <Popup>
                {location.location_name}
              </Popup>
            </Marker>
          )
        }
        {
            vaccinationLocations && vaccinationLocations.map(location =>
            <Marker
              position={[location.latitude, location.longitude]}
              icon={vaccineIcon}
              key={`location${location.id}`}
            >
              <Popup>
                Vaccine available here!
              </Popup>
            </Marker>
          )
        }
      </MapContainer>
    </div>
  );
}

export default Map;