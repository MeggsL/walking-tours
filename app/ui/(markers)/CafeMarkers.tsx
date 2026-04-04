"use client";

import {
  useAdvancedMarkerRef,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";

import cafes from "../../data/cafes";
import { useState } from "react";
import { brown } from "@mui/material/colors";

//the cafe and pubs data points are received and handled
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
      {/* map out the various points from the data source: overwhelm.ts */}
      {points.map((point) => (
        <AdvancedMarker
          ref={markerRef}
          position={point}
          key={point.key}
          onClick={() => handleActiveMarker(point)}
        >
          {/* create custom pin */}
          <Pin background={brown[300]} borderColor={brown[600]} scale={1.4}>
            {/* children are rendered as 'glyph' of pin */}
            <span style={{ fontSize: "1rem" }}>☕️</span>
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

//function to render out the collection of cafe and pub markers and infowindows
function CafeMarkers() {
  return <MapMarkers points={cafes} />;
};

export default CafeMarkers;