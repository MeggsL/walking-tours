"use client";

import { useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import "./routes.css";

export default function AllDirections() {
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
          { location: "Monument to the Unknown Woman Worker , Belfast UK" },
          { location: "Crown Liquor Saloon, Belfast UK" },
          { location: "Crumlin Road Gaol Visitor Attraction and Conference Centre, Belfast UK" },
          { location: "Crumlin Road Courthouse, Belfast UK" },
          { location: "Queen's Arcade, Belfast UK" }, //to see the masts
          { location: "Belfast Cathedral, Belfast UK" },
          { location: "Custom House, Belfast UK" },
          { location: "The Speaker, Belfast UK" },
          { location: "Albert Memorial Clock, Belfast UK" },
          { location: "The Big Fish, Belfast UK" },
          { location: "Beacon of Hope, Belfast UK" },
          { location: "Spirit of Belfast, Belfast UK" },
          { location: "Henry Cooke Monument, Belfast UK" },
          { location: "St George's Market, Belfast UK" },
          { location: "Riddell Hall, Belfast UK" },
          { location: "The Lanyon Building, Belfast UK" },
          { location: "The Ulster Hall, Belfast UK" },
          { location: "The Linen Hall, Belfast UK" },
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