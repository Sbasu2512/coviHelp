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

  const locations = props.locations.data;
  return (
    <div className={props.locations.type}>
      <h3>Testing Locations</h3>
      <MapContainer center={[locations[0].latitude, locations[0].longitude]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[locations[0].latitude, locations[0].longitude]}>
          <Popup>
            <p><a href={locations[0].website}>{locations[0].location_name}</a></p>
            <a href={"tel:"+ locations[0].phone}>☎️{locations[0].phone}</a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>

  );
}

export default Map;