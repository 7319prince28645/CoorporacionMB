import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function Mapas() {

  return (
    
    <MapContainer center={[-8.386199, -74.545170]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
  const position = [];
      <Marker position={[-8.386199, -74.545170]}>
        <Popup>Estamos aquí en AV. BELLAVISTA NRO. 1208

</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapas;
