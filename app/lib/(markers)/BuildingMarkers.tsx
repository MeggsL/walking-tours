"use client";

import {
  useAdvancedMarkerRef,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";

import buildings from "../(sights)/buildings";
import { useState } from "react";
import { grey } from "@mui/material/colors";

//the building data points are received and handled
type Point = google.maps.LatLngLiteral & { key: string } & { name: string } & {
  info: string;
};
type Props = { points: Point[] };

const MapMarkers = ({ points }: Props) => {
  const [markerRef] = useAdvancedMarkerRef();
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

    //create a custom marker and infowindow for each data point
  return (
    <>
      {/* map out the various points from the data source: buildings.ts */}
      {points.map((point) => (
        <AdvancedMarker
          ref={markerRef}
          position={point}
          key={point.key}
          onClick={() => handleActiveMarker(point)}
        >
          {/* create custom pin */}
          <Pin background={grey[300]} borderColor={grey[700]} scale={1.4}>
            {/* children are rendered as 'glyph' of pin */}
            <span style={{ fontSize: "1rem" }}>🏛️</span>
          </Pin>

          {/* create InfoWindow for each marker and set it so that only the window for the marker clicked-on opens*/}
          {activeMarker === point ? (
            <InfoWindow
              maxWidth={200}
              onCloseClick={() => setActiveMarker(null)}
              position={point}
              key={point.key}
            >
              <h2>{point.name}</h2>
              <p>{point.info}</p>
            </InfoWindow>
          ) : null}
        </AdvancedMarker>
      ))}
    </>
  );
};
export { MapMarkers };

//function to render out the collection of building markers and infowindows
function BuildingMarkers() {
  return <MapMarkers points={buildings} />;
};

export default BuildingMarkers;