

// import './map.css'

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// import L from 'leaflet';

// import "leaflet/dist/leaflet.css"

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconVaccine from 'leaflet/dist/images/syringe.png';
// import iconTesting from 'leaflet/dist/images/testing.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let userIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow,
//     iconSize: [25, 41],
//     iconAnchor: [12, 41]
// });

// let vaccineIcon = L.icon({
//   iconUrl: iconVaccine,
//   iconSize: [32, 32],
//   iconAnchor: [0, 32]
// });

// let testingIcon = L.icon({
//   iconUrl: iconTesting,
//   iconSize: [32, 32],
//   iconAnchor: [32, 32]
// });

// L.Marker.prototype.options.icon = testingIcon;



// function Map(props) {

//   const { userCoordinates, testingLocations } = props.data;
//   testingLocations.forEach(location => {
//     console.log(location.active)
//   });
//   return (
//     <div className="map">
//       <h3>Helpful locations around you</h3>
//       <MapContainer center={userCoordinates} zoom={12} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {
//           testingLocations.map(location =>
//             <Marker position={[location.latitude, location.longitude]}>
//               <Popup>
//                 location
//               </Popup>
//             </Marker>
//           )
//         }

//       </MapContainer>
//     </div>
//   );
// }

// export default Map;