import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const RouteMap = ({ fromLocation, toLocation }) => {
  const [fromCoords, setFromCoords] = useState(null);
  const [toCoords, setToCoords] = useState(null);

  useEffect(() => {
    const fetchCoords = async (address) => {
      try {
        const response = await axios.get(`http://localhost:3002/api/geocode`, { params: { address } });
        return [response.data.latitude, response.data.longitude];
      } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
      }
    };

    const setupRoute = async () => {
      const from = await fetchCoords(fromLocation);
      const to = await fetchCoords(toLocation);
      if (from && to) {
        setFromCoords(from);
        setToCoords(to);
      }
    };

    if (fromLocation && toLocation) {
      setupRoute();
    }
  }, [fromLocation, toLocation]);

  const Routing = ({ fromCoords, toCoords }) => {
    const map = useMap();
  
    useEffect(() => {
      if (!fromCoords || !toCoords) return undefined; // Check both coordinates are available
  
      const routingControl = L.Routing.control({
        waypoints: [L.latLng(fromCoords[0], fromCoords[1]), L.latLng(toCoords[0], toCoords[1])],
        routeWhileDragging: false,
      }).addTo(map);
  
      // Cleanup function to remove the routing control from the map
      return () => {
        map.removeControl(routingControl);
      };
    }, [map, fromCoords, toCoords]); // Dependency array includes map, fromCoords, and toCoords
  
    return null;
  };
  
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {fromCoords && toCoords && <Routing />}
    </MapContainer>
  );
};
export default RouteMap;