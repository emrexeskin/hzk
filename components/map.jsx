"use client"
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    
    
    const mapRef = useRef(null);

    useEffect(() => {
        mapRef.current = L.map('map', {
            center: [51.505, -0.09],
            zoom: 13,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mapRef.current);
        
        return () => {
            mapRef.current.remove();
        };
    }, []);

  return (
    <div id="map" className='w-full h-[400px]'></div>
  )
}
