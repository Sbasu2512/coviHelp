

import './map.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import L from 'leaflet';

import "leaflet/dist/leaflet.css"

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});


L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {

  const { userCoordinates } = props.data;

  return (
    <div className='map'>
      <h3>Testing Locations</h3>
      <MapContainer center={userCoordinates} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={userCoordinates}>
          <Popup>
              Home :)
          </Popup>
        </Marker>
      </MapContainer>
    </div>

  );
}

export default Map;