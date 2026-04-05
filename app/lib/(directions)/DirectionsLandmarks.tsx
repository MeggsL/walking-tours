"use client";

import { useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import "./routes.css";

export default function LandmarkDirections() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  //  console.log(directionsService);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    directionsService
      .route({
        origin: "Europa Buscentre, Belfast UK",

        waypoints: [
          { location: "Crown Liquor Saloon, Belfast UK" },
          { location: "Monument to the Unknown Woman Worker , Belfast UK" },
          { location: "Henry Cooke Monument, Belfast UK" },
          { location: "Albert Memorial Clock, Belfast UK" },
          { location: "Belfast Cathedral, Belfast UK"},
          { location: "St George's Market, Belfast UK" },
          { location: "Titanic Memorial Garden, Belfast UK" },
          { location: "Memorial to World War I and II soldiers, Belfast UK" },
        ],
        destination: "Front of Belfast City Hall, Belfast UK",
        travelMode: google.maps.TravelMode.WALKING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  console.log(routes);
  if (!leg) return null;

  return null;
}